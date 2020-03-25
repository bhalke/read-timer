//var fileReaderService = require('reader-service.js');
// require(['reader-service.js'], function (fileReaderService) {// //foo is now loaded.// });
define(function(require) {
            var fileReaderService = require('reader-service.js');
            var fileButton = document.getElementById('send');

            function readMyText(ele) {
             var self = this; 
             this.sTime; 
             this.eTime; 
             this.element = ele;
           }

        readMyText.prototype = {
            init: function() {
                var self = this;
                self.element.addEventListener('click', function() {
                    if (self.element.innerText === 'Upload') {
                        var file = document.getElementById('fileInput');
                        if (file.files.length > 0) {
                            var fileName = file.files[0].name;
                            var readd = self.readeFile(fileName, self.handledata);
                        }
                    } else if (self.element.innerText === 'Start') {
                        this.innerText = 'reading...'
                        self.startTime(new Date());
                    } else if (self.element.innerText === 'End') {
                        this.previousElementSibling.innerText = 'Start'
                        self.endTime(new Date());
                    } else {
                        return;
                    }
                })
            },
            startTime: function(date) {
                this.sTime = date.getTime();
                var hoinput = this.getMeElement('hideval');
                hoinput.value = this.sTime;
            },
            endTime: function(date) {
                var hoinput = this.getMeElement('hideval');
                var startTime = hoinput.value;
                var end = date.getTime();
                this.eTime = parseInt(end) - parseInt(startTime);
                var hold = this.getMeElement('time-display');
                hold.innerText = 'Total Time Taken is :' + this.eTime / 1000;
            },
            getMeElement: function(ele) {
                return document.getElementById(ele);
            },
            getFileData: function(event) {
                console.log(event);
            },
            readeFile: function(filePath, callback) {
                try {
                    fileReaderService.readTextFile(filePath, callback);
                } catch(error) {
                    console.log(error);
                }
            },
            handledata: function(text) {
                var hold = document.getElementById('holder');
                hold.innerText = text;
            }
        }
        var addHandler = ['send', 'startbtn', 'endbtn'];
        for (var i in addHandler) {
            var inst = document.getElementById(addHandler[i]);
            var inst = new readMyText(inst);
            inst.init();
        }
            });