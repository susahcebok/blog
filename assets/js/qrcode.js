  // Change the URL in lines 6 and 10 for the "Learn More" button in the homepage hero
        (function() {
            if (window.location.pathname === "/") {
                var button = document.querySelector('.hero a[href="#scrollToMe"]');
                if (button) {
                    button.href = "/";
                    button.addEventListener("click", function(event) {
                        event.stopPropagation();
                        event.preventDefault();
                        window.location.href = "/";
                    });
                }
            }
        })();
    </script>
    <script>
        /*  URL Script Starts  */
        $(function() {
            $("#url-code-gen").click(function() {
                $("#url-qrcode").html("");
                var txt = $.trim($('input[name="url"]').val());
                if (txt == '') {
                    alert("Please Enter Url you want to embed in QR Code");
                    return false;
                }
                var size = $('select[name="size"]').val();
                var sizeSplit = size.split('x');
                var width = sizeSplit[0];
                var height = sizeSplit[1];
                generateQRcode(width, height, txt);
                return false;
            });

            function generateQRcode(width, height, url) {
                $('#url-qrcode').qrcode({
                    width: width,
                    height: height,
                    text: url
                });

                var btn = document.getElementById('downloadsvg');
                btn.style.display = "block";
                $('canvas').removeAttr('id')
                $('#url-qrcode canvas').attr("id", "canvasid")
            }

        });

        /*  URL Script Ends  */

        /*  Sms Script Starts  */
        $(function() {
            $("#sms-code-gen").click(function() {
                $("#sms-qrcode").html("");
                var txt = $.trim($('input[name="text"]').val());
                var msg = $.trim($('input[name="msg"]').val());
                if (txt == '') {
                    alert("Please Enter SMS Text you want to embed in QR Code");
                    return false;
                }
                var size = $('select[name="size-sms"]').val();
                var sizeSplit = size.split('x');
                var width = sizeSplit[0];
                var height = sizeSplit[1];
                generateQRcode(width, height, txt, msg);
                return false;
            });

            function generateQRcode(width, height, text, msg) {
                $('#sms-qrcode').qrcode({
                    width: width,
                    height: height,
                    text: "sms:" + text + "?body=" + msg
                });

                var btn = document.getElementById('downloadsvg');
                btn.style.display = "block";
                $('canvas').removeAttr('id')
                $('#sms-qrcode canvas').attr("id", "canvasid")
            }

        });
        /*  Sms Script Ends  */

        /*  Text Script Starts  */
        $(function() {
            $("#text-code-gen").click(function() {
                $("#text-qrcode").html("");
                var des = $.trim($('textarea[name="desc"]').val());
                if (des == '') {
                    alert("Please Enter Text you want to embed in QR Code");
                    return false;
                }
                var size = $('select[name="size-text"]').val();
                var sizeSplit = size.split('x');
                var width = sizeSplit[0];
                var height = sizeSplit[1];
                generateQRcode(width, height, des);
                return false;
            });

            function generateQRcode(width, height, des) {
                $('#text-qrcode').qrcode({
                    width: width,
                    height: height,
                   text: des
                });

                var btn = document.getElementById('downloadsvg');
                btn.style.display = "block";
                $('canvas').removeAttr('id')
                $('#text-qrcode canvas').attr("id", "canvasid")
            }

        });
        /*  Text Script Ends  */

        /*  Email Script Starts  */
        $(function() {
            $("#email-code-gen").click(function() {
                $("#email-qrcode").html("");
                var txt = $.trim($('input[name="email"]').val());
                if (txt == '') {
                    alert("Please Enter Email you want to embed in QR Code");
                    return false;
                }
                var size = $('select[name="size1"]').val();
                var sizeSplit = size.split('x');
                var width = sizeSplit[0];
                var height = sizeSplit[1];
                generateQRcode(width, height, txt);
                return false;
            });

            function generateQRcode(width, height, email) {
                $('#email-qrcode').qrcode({
                    width: width,
                    height: height,
                    text: email
                });

                var btn = document.getElementById('downloadsvg');
                btn.style.display = "block";
                $('canvas').removeAttr('id')
                $('#email-qrcode canvas').attr("id", "canvasid")
            }

        });

        /*  Email Script Ends  */

        /*  Call Script Starts  */
        $(function() {
            $("#phone-code-gen").click(function() {
                $("#phone-qrcode").html("");
                var txt = $.trim($('input[name="tel"]').val());
                if (txt == '') {
                    alert("Please Enter Mobile Number you want to embed in QR Code");
                    return false;
                }
                var size = $('select[name="sizetel"]').val();
                var sizeSplit = size.split('x');
                var width = sizeSplit[0];
                var height = sizeSplit[1];
                generateQRcode(width, height, txt);
                return false;
            });

            function generateQRcode(width, height, tel) {
                $('#phone-qrcode').qrcode({
                    width: width,
                    height: height,
                    text: "tel:" + tel
                });

                var btn = document.getElementById('downloadsvg');
                btn.style.display = "block";
                $('canvas').removeAttr('id')
                $('#phone-qrcode canvas').attr("id", "canvasid")
            }

        });
        /*  Call Script Ends  */

        /*  Youtube Script Starts  */
        $(function() {
            $("#ytb-code-gen").click(function() {
                $("#ytb-qrcode").html("");
                var txt = $.trim($('input[name="yutube"]').val());
                if (txt == '') {
                    alert("Please Enter Youtube link you want to embed in QR Code");
                    return false;
                }
                var size = $('select[name="size-ytb"]').val();
                var sizeSplit = size.split('x');
                var width = sizeSplit[0];
                var height = sizeSplit[1];
                generateQRcode(width, height, txt);
                return false;
            });

            function generateQRcode(width, height, yutube) {
                $('#ytb-qrcode').qrcode({
                    width: width,
                    height: height,
                    text: "src=" + yutube
                });

                var btn = document.getElementById('downloadsvg');
                btn.style.display = "block";
                $('canvas').removeAttr('id')
                $('#ytb-qrcode canvas').attr("id", "canvasid")
            }

        });

        /*  Youtube Script Ends  */
        function downloadsvg() {
            var canvas = document.getElementById("canvasid");
            image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = "my-qrcode.png";
            link.href = image;
            link.click();
        }
        document.getElementById('downloadsvg').addEventListener('click', downloadsvg, false);

        /*  Tab Script Starts  */
        $('.nav-link').click(function() {
            var btn = document.getElementById('downloadsvg');
            btn.style.display = "none";
        })
        $('.nav-tabs li a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).tab('show');
        });
