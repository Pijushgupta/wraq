!function(e){function t(e=null,t=null){return null!=t&&(null!=e&&void jQuery.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"update_form_toggle_infomation",nonce:jQuery("#awraqnonce").val(),state:t,belongsto:e},error:function(e,t,a){console.log("Ajax error form 'updateFormAreatoggleInformation' function!")}}))}function a(e=null,t=null,a=null){if(null==e||null==t||null==a)return!1;jQuery.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"save_button_as_product_meta",nonce:jQuery("#awraqnonce").val(),productid:e,buttonid:t,status:a},error:function(){return!1},success:function(e){if("boolean"==typeof(e=JSON.parse(e)))return e}})}jQuery(".aavoya-wraq-tab").on("click",function(){jQuery(".aavoya-wraq-tab").each(function(){jQuery(this).hasClass("active")&&jQuery(this).removeClass("active")}),jQuery(this).addClass("active");var e=jQuery(this).attr("data-target");jQuery(".tab-body-area").each(function(){jQuery(this).is("#"+e)?jQuery(this).removeClass("hidden"):jQuery(this).addClass("hidden")})}),jQuery("#enable-wordpress-id").on("change",function(){jQuery(this).is(":checked")?(jQuery("#wordpress-default-setting-area").show(),t("wp",!0)):(jQuery("#wordpress-default-setting-area").hide(),t("wp",!1))}),jQuery("#enable-woo-id").on("change",function(){jQuery(this).is(":checked")?(jQuery("#woo-default-setting-area").show(),t("wo",!0)):(jQuery("#woo-default-setting-area").hide(),t("wo",!1))}),jQuery(".woo-appender").on("change",".psave",function(){var e=jQuery(this).parent().parent().find(".button-selected").find(":selected").val(),t=jQuery(this).parent().parent().attr("pid"),o=jQuery(this).prop("checked");saveStatus=a(t,e,o)}),jQuery(".woo-appender").on("change",".button-selected",function(){var e=jQuery(this).find("option:selected").val(),t=jQuery(this).parent().parent(),o=t.attr("pid"),n=t.find(".psave").prop("checked");saveStatus=a(o,e,n)}),jQuery(".wp-appender").on("click",".drawer-handle",function(){var e=jQuery(this).parent().next(".drawer");e.hasClass("hidden")?(e.removeClass("hidden"),jQuery(this).find("svg").addClass("transform rotate-90")):(e.addClass("hidden"),jQuery(this).find("svg").removeClass("transform rotate-90"))}),jQuery(".no-msg").on("click",function(){jQuery(".msg-area").fadeOut(500)}),jQuery(".wp-appender").on("click",".save",function(){var e=jQuery(this).parent().parent().parent();!function(e,t,a,o,l,s,d,i,u,c,p){jQuery.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"save_button_data",nodeid:e,contact7form:t,borderradius:a,paddingx:o,paddingy:l,buttonbgcolor:s,buttontextcolor:d,buttontext:i,buttontracking:u,buttonfontsize:c,buttoncssclass:p,nonce:jQuery("#awraqnonce").val()},error:function(e,t,a){console.log("Ajax error during saving the setting data")},success:function(e){1==(e=JSON.parse(e))?n("Button Saved!"):r("Unable to save the Button!")}})}(e.attr("id"),e.parent().find(".contact-7-selected").val(),e.find(".borderradius").val(),e.find(".paddingx").val(),e.find(".paddingy").val(),e.find(".bgcolor").val(),e.find(".textcolor").val(),e.find(".bottontext").val(),e.find(".buttontracking").val(),e.find(".buttonfontsize").val(),e.find(".cssclass").val())});var o=!0;function n(e){var t='<div class="modal z-40 bottom-0 right-0 fixed  overflow-y-auto w-96"><div class="bg-white border border-gray-100  m-4 rounded shadow "><svg class="w-8 h-8 text-blue-800 float-right -mr-3 -mt-3 bg-white rounded-full close cursor-pointer shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div class="modal-body  modal-body overflow-hidden rounded "><div class="border-l-8 border-blue-900 p-4"><span class="block">'+e+'</span></div></div></div><script>jQuery(".close").on("click",function(){jQuery(this).parent().parent().remove();});<\/script></div>';jQuery(".message-area").prepend(t)}function r(e){var t='<div class="modal z-40 bottom-0 right-0 fixed  overflow-y-auto w-96"><div class="bg-white border border-gray-100  m-4 rounded shadow "><svg class="w-8 h-8 text-red-600 float-right -mr-3 -mt-3 bg-white rounded-full close cursor-pointer shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div class="modal-body  modal-body overflow-hidden rounded "><div class="border-l-8 border-red-600 p-4"><span class="block">'+e+'</span></div></div></div><script>jQuery(".close").on("click",function(){jQuery(this).parent().parent().remove();});<\/script></div>';jQuery(".message-area").prepend(t)}jQuery(".wp-appender").on("click",".delete",function(){var e=jQuery(this).parent().parent().parent().attr("id");1==o&&(jQuery(".deletewarning").attr("postid",e),jQuery(".deletewarning").removeClass("hidden"))}),jQuery(".close").on("click",function(){jQuery(this).parent().parent().addClass("hidden"),o=!0}),jQuery(".del-yes").on("click",function(){if(0!=o){o=!1;var e=jQuery(this).parent().parent().parent().parent().parent(),t=e.attr("postid");e.addClass("hidden"),function(e){jQuery.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"delete_button_data",nodeid:e,nonce:jQuery("#awraqnonce").val()},error:function(e,t,a){console.log("Ajax error during deleting data")},success:function(t){1==(t=JSON.parse(t))?(n("Button Deleted"),function(e=null){if(null==e)return!1;jQuery(".row"+e).fadeOut(300,function(){jQuery(this).remove()})}(e)):r("Unable to delete the button")}})}(t),o=!0}}),jQuery(".wp-appender").on("click",".copier",function(){var e=jQuery(this).parent(),t=e.find(".toclipboard"),a=e.find(".tool-tip");try{navigator.clipboard.writeText(t.val()),a.html("Copied!"),a.addClass("inline"),a.removeClass("hidden"),setTimeout(function(){a.removeClass("inline"),a.addClass("hidden")},2e3)}catch(e){a.html("SSL issue!"),a.addClass("inline"),a.removeClass("hidden"),setTimeout(function(){a.removeClass("inline"),a.addClass("hidden")},2e3)}})}(jQuery),jQuery,jQuery(".wp-appender").on("change",".borderradius",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().find(".buttonborderradius").css("border-radius",e+"px")}),jQuery(".wp-appender").on("change",".paddingx",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().find(".buttonborderradius").css({"padding-left":e+"px","padding-right":e+"px"})}),jQuery(".wp-appender").on("change",".paddingy",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().find(".buttonborderradius").css({"padding-top":e+"px","padding-bottom":e+"px"})}),jQuery(".wp-appender").on("keyup",".bottontext",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().find(".buttonborderradius").html(e)}),jQuery(".wp-appender").on("change",".buttontracking",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().find(".buttonborderradius").css({"letter-spacing":e+"px"})}),jQuery(".wp-appender").on("change",".buttonfontsize",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().find(".buttonborderradius").css({"font-size":e+"px"})}),jQuery(".wp-appender").on("change",".bgcolor",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().parent().parent().find(".buttonborderradius").css({"background-color":e})}),jQuery(".wp-appender").on("change",".textcolor",function(){let e=jQuery(this).val();jQuery(this).parent().parent().parent().parent().parent().find(".buttonborderradius").css({color:e})}),jQuery,jQuery(".wpadder").on("click",function(){jQuery.ajax({url:ajaxurl,type:"post",dateType:"json",data:{action:"get_new_button_data",nonce:jQuery("#awraqnonce").val()},error:function(e,t,a){console.log("Ajax Error")},success:function(e){e=JSON.parse(e),forms_select_obj=e.forms,console.log(e.style);var t="";for(const[e,a]of Object.entries(forms_select_obj))t+='<option value="'+e+'">'+e+" - "+a+"</option>";var a="border-radius:"+e.style.borderradiusvalue+"px; padding:"+e.style.paddingyvalue+"px "+e.style.paddingxvalue+"px; background-color:"+e.style.buttonbgcolor+"; color:"+e.style.buttontextcolor+"; letter-spacing:"+e.style.buttontracking+"px; text-size:"+e.style.buttonfontsize+"px;",o='<div class="row  w-full flex  relative z-50 rounded-sm shadow mt-2 items-center bg-white row'+e.id+'" ><div class="table-def text-center shortcode"><input type="text" name="sshortcode" class="bg-gray-200 rounded px-6 py-2 toclipboard" value=\''+e.short_code+'\'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-2 text-gray-400 cursor-pointer copier" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg><div class="tool-tip hidden"></div></div><div class="table-def text-center"><select name="selected_form" class="contact-7-selected">'+t+'</select></div><div class="p-2 drawer-handle cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-4 h-4 text-gray-400 duration-100"><path d="M10 0a10 10 0 110 20 10 10 0 010-20zM2 10a8 8 0 1016 0 8 8 0 00-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"/></svg></div></div><div class="drawer  shadow rounded-sm p-2 -mt-1 pt-4 hidden transform duration-100 row'+e.id+'" id="'+e.id+'"><div class="w-full flex"><div class="w-full py-4"><button class="block  border buttonborderradius '+e.style.buttoncssclass+'" id="button'+e.id+'" style="'+a+'" >'+e.style.buttontext+'</button></div></div><div class="w-full flex bg-gray-100 p-2 rounded"><div class="w-1/2 px-2 text-xs tracking-wide font-medium"><label class="" for="borderradius'+e.id+'"> Corners</label><input type="range" min="0" max="100" value="'+e.style.borderradiusvalue+'" class="slider block w-full my-2 borderradius" id="borderradius'+e.id+'"><label class="" for="paddingx'+e.id+'"> Padding X</label><input name="paddingx" type="range" min="0" max="75" value="'+e.style.paddingxvalue+'" class="slider block w-full my-2 paddingx" id="paddingx'+e.id+'"><label class="" for="paddingy'+e.id+'"> Padding Y</label><input name="paddingy" type="range" min="0" max="75" value="'+e.style.paddingyvalue+'" class="slider block w-full my-2 paddingy" id="paddingy'+e.id+'"><div class="flex"><div class="w-1/2"><lable class="block mb-2" for="color-'+e.id+'">Background Colour</lable><input class="bgcolor" id="color-'+e.id+'" name="color-'+e.id+'" value="'+e.style.buttonbgcolor+'" type="color"></div><div class="w-1/2"><lable class="block mb-2" for="tcolor-'+e.id+'">Text Colour</lable><input  class="textcolor" id="tcolor-'+e.id+'" name="tcolor-'+e.id+'" value="'+e.style.buttontextcolor+'" type="color"></div></div></div><div class="w-1/2 px-2 text-xs tracking-wide font-medium"><lable class="block mb-2" for="bottontext'+e.id+'">Text</lable><input name="buttontext" class="border p-2 bottontext rounded w-full " value="'+e.style.buttontext+'" id="bottontext'+e.id+'"><lable class="block my-2" for="buttontracking'+e.id+'">Tracking</lable><input name="buttontracking" min="0" max="40" value="'+e.style.buttontracking+'" class="slider block w-full my-2 buttontracking" type="range" value="" id="buttontracking'+e.id+'"><lable class="block my-2" for="buttonfontsize'+e.id+'">Size</lable><input name="buttonfontsize" min="10" max="65"  class="slider block w-full my-2 buttonfontsize" type="range" value="'+e.style.buttonfontsize+'" id="buttonfontsize'+e.id+'"><label class="mb-2" for="cssclass'+e.id+'">Css Class (Optional)</label><input type="text" name="cssclass" class="w-full cssclass" id="cssclass'+e.id+'" value="'+e.style.buttoncssclass+'"></div></div><div class="w-full text-xs tracking-wide front-medium flex justify-end"><div class="mr-2"><button class="rounded flex ml-auto mr-0 px-8 py-2 mt-2 bg-blue-900 text-white text-xs tracking-wide font-medium delete" id="delete'+e.id+'">Delete</button></div><div class=""><button class="rounded flex ml-auto mr-0 px-8 py-2 mt-2 bg-blue-900 text-white text-xs tracking-wide font-medium save" id="save'+e.id+'">Save</button></div></div><div class="w-full px-2 text-xs tracking-wide front-medium"></div></div></div>';jQuery("#wordpress-default-setting-area .wp-appender").prepend(o)}})}),jQuery.ajax({url:ajaxurl,type:"post",dateType:"json",data:{action:"get_all_shortcodes",nonce:jQuery("#awraqnonce").val()},error:function(e,t,a){console.log("Ajax Error")},success:function(e){(e=JSON.parse(e)).forEach(function(e,t,a){var o=e.forms,n="";for(const[e,t]of Object.entries(o))n+='<option value="'+e+'">'+e+" - "+t+"</option>";var r,l=e.postmeta,s="border-radius:"+l.borderradiusvalue+"px;padding:"+l.paddingyvalue+"px "+l.paddingxvalue+"px;background-color:"+l.buttonbgcolor+";color:"+l.buttontextcolor+";letter-spacing:"+l.buttontracking+"px;font-size:"+l.buttonfontsize+"px;";r=l.buttontext?l.buttontext:"Button";var d='<div class="row  w-full flex  relative z-30 rounded-sm shadow mt-2 items-center bg-white row'+e.id+'" ><div class="table-def text-center shortcode"><input type="text" name="sshortcode" class="bg-gray-200 rounded px-6 py-2 toclipboard" value=\''+e.short_code+'\'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-2 text-gray-400 cursor-pointer copier" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg><div class="tool-tip hidden"></div></div><div class="table-def text-center"><select name="selected_form" class="contact-7-selected">'+n+'</select></div><div class="p-2 drawer-handle cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-4 h-4 text-gray-400 duration-100"><path d="M10 0a10 10 0 110 20 10 10 0 010-20zM2 10a8 8 0 1016 0 8 8 0 00-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"/></svg></div></div><div class="drawer  shadow rounded-sm p-2 -mt-1 pt-4 hidden transform duration-100 row'+e.id+'" id="'+e.id+'"><div class="w-full flex"><div class="w-full py-4"><button class="block px-8 py-4 border buttonborderradius" id="button'+e.id+'" style="'+s+'">'+r+'</button></div></div><div class="w-full flex bg-gray-100 p-2 rounded"><div class="w-1/2 px-2 text-xs tracking-wide font-medium"><label class="" for="borderradius'+e.id+'"> Corners</label><input type="range" min="0" max="100" value="'+l.borderradiusvalue+'" class="slider block w-full my-2 borderradius" id="borderradius'+e.id+'"><label class="" for="paddingx'+e.id+'"> Padding X</label><input name="paddingx" type="range" min="0" max="75" value="'+l.paddingxvalue+'" class="slider block w-full my-2 paddingx" id="paddingx'+e.id+'"><label class="" for="paddingy'+e.id+'"> Padding Y</label><input name="paddingy" type="range" min="0" max="75" value="'+l.paddingyvalue+'" class="slider block w-full my-2 paddingy" id="paddingy'+e.id+'"><div class="flex"><div class="w-1/2"><lable class="block mb-2" for="color-'+e.id+'">Background Colour</lable><input  class="bgcolor" id="color-'+e.id+'" name="color-'+e.id+'" value="'+l.buttonbgcolor+'" type="color"></div><div class="w-1/2"><lable class="block mb-2" for="tcolor-'+e.id+'">Text Colour</lable><input  class="textcolor" id="tcolor-'+e.id+'" name="tcolor-'+e.id+'" value="'+l.buttontextcolor+'" type="color"></div></div></div><div class="w-1/2 px-2 text-xs tracking-wide font-medium"><lable class="block mb-2" for="bottontext'+e.id+'">Text</lable><input name="buttontext" class="border p-2 bottontext rounded w-full " value="'+l.buttontext+'" id="bottontext'+e.id+'"><lable class="block my-2" for="buttontracking'+e.id+'">Tracking</lable><input name="buttontracking" min="0" max="40" value="'+l.buttontracking+'" class="slider block w-full my-2 buttontracking" type="range" value="" id="buttontracking'+e.id+'"><lable class="block my-2" for="buttonfontsize'+e.id+'">Size</lable><input name="buttonfontsize" min="10" max="65"  class="slider block w-full my-2 buttonfontsize" type="range" value="'+l.buttonfontsize+'" id="buttonfontsize'+e.id+'"><label class="mb-2" for="cssclass'+e.id+'">Css Class (Optional)</label><input type="text" name="cssclass" class="w-full cssclass" id="cssclass'+e.id+'" value="'+l.buttoncssclass+'"></div></div><div class="w-full text-xs tracking-wide front-medium flex justify-end"><div class="mr-2"><button class="rounded flex ml-auto mr-0 px-8 py-2 mt-2 bg-blue-900 text-white text-xs tracking-wide font-medium delete" id="delete'+e.id+'">Delete</button></div><div class=""><button class="rounded flex ml-auto mr-0 px-8 py-2 mt-2 bg-blue-900 text-white text-xs tracking-wide font-medium save" id="save'+e.id+'">Save</button></div></div></div></div>';jQuery("#wordpress-default-setting-area .wp-appender").append(d)})}}),jQuery.ajax({url:ajaxurl,type:"post",dateType:"json",data:{action:"get_all_products",nonce:jQuery("#awraqnonce").val()},error:function(e,t,a){console.log("Ajax Error")},success:function(e){0!=(e=JSON.parse(e))&&e.forEach(function(e,t,a){var o=e.options,n="",r="";0!=e.button?(buttonSelected=parseInt(e.button.buttonid),1==e.button.buttonstatus&&(r="checked")):buttonSelected=!1;for(const[e,t]of Object.entries(o)){var l="";t.id==buttonSelected&&(l="selected"),n+='<option value="'+t.id+'"'+l+">"+t.short_code+"</option>"}var s='<div class="row  w-full flex  justify-between relative z-30 rounded-sm shadow mt-2 items-center items-center bg-white row'+e.id+'"  pid="'+e.id+'"><div class="md:w-2/5 p-2 text-left product-title"><span class="rounded-full bg-blue-100 text-blue-900 font-bold px-2 mr-1 py-1">'+e.id+"</span>"+e.title+'</div><div class="md:w-1/5 text-center"><select name="selected_button" class="w-full code button-selected border border-gray-500 ">'+n+'</select></div><div class=" md:w-1/5 p-2 drawer-handle cursor-pointer text-center"><input type="checkbox"  class="rounded flex ml-auto mr-0 px-8 py-2 mt-2 bg-blue-900 text-white text-xs tracking-wide font-medium psave p-'+e.id+'" '+r+">";jQuery("#woo-default-setting-area .woo-appender").append(s)})}}),jQuery,jQuery(".save-settings").on("click",function(){var e=jQuery(this).parent().parent();const t={globalCorner:e.find("#global-corner").val(),globalText:e.find("#global-b-text").val(),globalPaddingX:e.find("#global-padding-x").val(),globalPaddingY:e.find("#global-padding-y").val(),globalSize:e.find("#global-size").val(),globalTracking:e.find("#global-tracking").val(),globalBgColor:e.find("#global-background-color").val(),globalTextColor:e.find("#global-text-color").val(),globalCssClass:e.find("#global-css-class").val()};jQuery.ajax({url:ajaxurl,type:"POST",dataType:"json",data:{action:"save_global_setting",nonce:jQuery("#awraqnonce").val(),globaldata:t},error:function(e,t,a){console.log(a)},success:function(e){console.log(e)}})});
