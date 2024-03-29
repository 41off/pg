﻿ // Play .ts files  //
 
var $ = document.querySelector.bind(document);
    var vjsParsed,
        video, 
        mediaSource;
    // Define a generic event callback handler that only prints event types
    function logevent (event) {
      console.log(event);
    }
    
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "../PylonVideo/test.ts");
    // Received is video/mp2t binary data, Blob type can also be, but arraybuffer type is convenient for subsequent direct processing. 
    xhr.responseType = "arraybuffer";
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState ==4) {
        if (xhr.status == 200) {
          transferFormat(xhr.response);
        } else {
          console.log('error');
        }
      }
    }
    
    function transferFormat (data) {
      // Save source data from ArrayBuffer format to operable Uint8Array format
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
      var segment = new Uint8Array(data); 
      var combined = false;
      // Receive no audio TS file, OutputType is set to'video'and audio TS is set to'combined'
      var outputType = 'video';
      var remuxedSegments = [];
      var remuxedBytesLength = 0;
      var remuxedInitSegment = null;

      // The Remux option defaults to true, mixes the audio and video of the source data into mp4, and false does not.
      var transmuxer = new muxjs.mp4.Transmuxer({remux: false});
      
      // Listen for data events and start transforming streams
      transmuxer.on('data', function(event) {
        console.log(event);
        if (event.type === outputType) {
          remuxedSegments.push(event);
          remuxedBytesLength += event.data.byteLength;
          remuxedInitSegment = event.initSegment;
        }
      });
      // Listen for transformations to complete events, splice the final results and pass them in to MediaSource
      transmuxer.on('done', function () {
        var offset = 0;
        var bytes = new Uint8Array(remuxedInitSegment.byteLength + remuxedBytesLength)
        bytes.set(remuxedInitSegment, offset);
        offset += remuxedInitSegment.byteLength;

        for (var j = 0, i = offset; j < remuxedSegments.length; j++) {
          bytes.set(remuxedSegments[j].data, i);
          i += remuxedSegments[j].byteLength;
        }
        remuxedSegments = [];
        remuxedBytesLength = 0;
        // Resolve the transformed mp4-related information, independent of the final conversion results
        vjsParsed = muxjs.mp4.tools.inspect(bytes);
        console.log('transmuxed', vjsParsed);

        prepareSourceBuffer(combined, outputType, bytes);
      });
      // The push method may trigger the'data'event, so it is called after the event registration is completed.
      Transmuxer. push (segment); // Input source binary data, divided into M2TS packages, calling the process in the figure above in turn
      // The call to flush triggers the'done'event directly, so call it after the event registration is complete
      Transmuxer. flush (); // Clear all data from the cache
    }

    function prepareSourceBuffer (combined, outputType, bytes) {
      var buffer;
      video = document.createElement('video');
      video.controls = true;
      // MediaSource Web API: https://developer.mozilla.org/zh-CN/docs/Web/API/MediaSource
      mediaSource = new MediaSource(); 
      video.src = URL.createObjectURL(mediaSource);
    
      $('video-wrapper'). appendChild (video); // Add the H5 video element to the corresponding DOM node
    
      // Converted MP4 audio format and video format
      var codecsArray = ["avc1.64001f", "mp4a.40.5"];
    
      mediaSource.addEventListener('sourceopen', function () {
        // The default duration attribute of the MediaSource instance is NaN
        mediaSource.duration = 0;
        // Converting to MP4 with audio and video
        if (combined) {
          buffer = mediaSource.addSourceBuffer('video/mp4;codecs="' + 'avc1.64001f,mp4a.40.5' + '"');
        } else if (outputType === 'video') {
          // Converting to MP4 with video only
          buffer = mediaSource.addSourceBuffer('video/mp4;codecs="' + codecsArray[0] + '"');
        } else if (outputType === 'audio') {
          // Converting to MP4 with audio only
          buffer = mediaSource.addSourceBuffer('audio/mp4;codecs="' + (codecsArray[1] ||codecsArray[0]) + '"');
        }
    
        buffer.addEventListener('updatestart', logevent);
        buffer.addEventListener('updateend', logevent);
        buffer.addEventListener('error', logevent);
        video.addEventListener('error', logevent);
        // MP4 buffer is ready to pass in the converted data
        // Put bytes in the source Buffer created by Media Source
        // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBuffer
        buffer.appendBuffer(bytes);
        // Autoplay
        // video.play();
      });
    }; 
