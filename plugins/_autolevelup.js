var _0x5caf59=_0x289f;function _0x289f(_0x3cee2e,_0x58096b){var _0x4c0518=_0x4c05();return _0x289f=function(_0x289ffd,_0x2bb227){_0x289ffd=_0x289ffd-0xd7;var _0x25280c=_0x4c0518[_0x289ffd];return _0x25280c;},_0x289f(_0x3cee2e,_0x58096b);}(function(_0x346b1f,_0x47aa8c){var _0x27af01=_0x289f,_0x240c3b=_0x346b1f();while(!![]){try{var _0x43a1ac=-parseInt(_0x27af01(0x124))/0x1+-parseInt(_0x27af01(0x114))/0x2*(parseInt(_0x27af01(0xfc))/0x3)+parseInt(_0x27af01(0x113))/0x4*(parseInt(_0x27af01(0x120))/0x5)+parseInt(_0x27af01(0xe8))/0x6+parseInt(_0x27af01(0xf6))/0x7+parseInt(_0x27af01(0x106))/0x8*(parseInt(_0x27af01(0xd8))/0x9)+-parseInt(_0x27af01(0xee))/0xa*(parseInt(_0x27af01(0x12a))/0xb);if(_0x43a1ac===_0x47aa8c)break;else _0x240c3b['push'](_0x240c3b['shift']());}catch(_0x47fc22){_0x240c3b['push'](_0x240c3b['shift']());}}}(_0x4c05,0x316ee));import _0xa9985f from'../lib/database.js';import{canLevelUp}from'../lib/levelling.js';import _0x202df0 from'@clayzaaubert/canvix';import{stories}from'../lib/story.js';const more=String['fromCharCode'](0x200e),readMore=more[_0x5caf59(0x109)](0xfa1);export async function before(_0x2f7dc0){var _0xd204da=_0x5caf59;let _0x2449f4=global['db'][_0xd204da(0x11e)][_0xd204da(0xf8)][_0x2f7dc0[_0xd204da(0x10a)]];if(!_0x2449f4[_0xd204da(0x11c)])return!0x0;let _0x45c8a6=_0x2449f4['level']*0x1;while(canLevelUp(_0x2449f4[_0xd204da(0xe6)],_0x2449f4['exp'],global[_0xd204da(0xf4)]))_0x2449f4[_0xd204da(0xe6)]++;if(_0x2449f4[_0xd204da(0xe6)]===0x6){_0x2449f4[_0xd204da(0xe3)]='Novice';var _0x5410a1=stories[_0xd204da(0xdb)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xc){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xe4);var _0x5410a1=stories['story2'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x11){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x122);var _0x5410a1=stories['story3'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x19){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xdc);var _0x5410a1=stories[_0xd204da(0x117)];}else{if(_0x2449f4['level']===0x25){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xdf);var _0x5410a1=stories[_0xd204da(0xf0)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x30){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x125);var _0x5410a1=stories['story6'];}else{if(_0x2449f4['level']===0x3b){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xf5);var _0x5410a1=stories['story7'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x3f){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x10e);var _0x5410a1=stories['story8'];}else{if(_0x2449f4['level']===0x42){_0x2449f4['role']=_0xd204da(0x11b);var _0x5410a1=stories[_0xd204da(0xe9)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x49){_0x2449f4['role']='Grandmaster';var _0x5410a1=stories[_0xd204da(0x10d)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x52){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xed);var _0x5410a1=stories[_0xd204da(0xfd)];}else{if(_0x2449f4['level']===0x5e){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xf9);var _0x5410a1=stories[_0xd204da(0xda)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x69){_0x2449f4[_0xd204da(0xe3)]='Paragon';var _0x5410a1=stories[_0xd204da(0x107)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x73){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xde);var _0x5410a1=stories[_0xd204da(0xec)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x81){_0x2449f4[_0xd204da(0xe3)]='Templar';var _0x5410a1=stories[_0xd204da(0xfb)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x87){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x104);var _0x5410a1=stories[_0xd204da(0xf1)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x93){_0x2449f4['role']=_0xd204da(0x110);var _0x5410a1=stories['story17'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x9f){_0x2449f4[_0xd204da(0xe3)]='Immortal';var _0x5410a1=stories[_0xd204da(0x121)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xa8){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xe0);var _0x5410a1=stories[_0xd204da(0x128)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xaf){_0x2449f4[_0xd204da(0xe3)]='Sovereign';var _0x5410a1=stories['story20'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xb9){_0x2449f4['role']=_0xd204da(0xff);var _0x5410a1=stories['story21'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xc7){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x116);var _0x5410a1=stories[_0xd204da(0xdd)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xd2){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x11a);var _0x5410a1=stories[_0xd204da(0xf3)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xe5){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x105);var _0x5410a1=stories[_0xd204da(0x111)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xee){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x126);var _0x5410a1=stories['story25'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0xf9){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0xeb);var _0x5410a1=stories[_0xd204da(0x112)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x100){_0x2449f4['role']=_0xd204da(0xe7);var _0x5410a1=stories['story27'];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x10c){_0x2449f4[_0xd204da(0xe3)]='Transcendent';var _0x5410a1=stories[_0xd204da(0x127)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x117){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x100);var _0x5410a1=stories[_0xd204da(0xe2)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x121){_0x2449f4['role']=_0xd204da(0x129);var _0x5410a1=stories[_0xd204da(0xd7)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x127){_0x2449f4[_0xd204da(0xe3)]=_0xd204da(0x123);var _0x5410a1=stories['story31'];}else{if(_0x2449f4['level']===0x129){_0x2449f4[_0xd204da(0xe3)]='Luminary';var _0x5410a1=stories[_0xd204da(0x10c)];}else{if(_0x2449f4[_0xd204da(0xe6)]===0x12c){_0x2449f4[_0xd204da(0xe3)]='Immaterialis';var _0x5410a1=stories['story33'];}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}var _0x51b5c0=_0x2449f4[_0xd204da(0xe3)];if(_0x45c8a6!==_0x2449f4[_0xd204da(0xe6)]){let _0xf9f74f=('Selamat,\x20Kamu\x20Telah\x20Naik\x20Level!\x0a\x0a•\x20Level\x20Up\x20:\x20*'+_0x45c8a6+'*\x20->\x20*'+_0x2449f4['level']+_0xd204da(0x118)+readMore+_0xd204da(0x11d)+(_0x5410a1?_0x5410a1:_0xd204da(0xd9)))['trim']();try{let _0x45f4a2,_0x395aad,_0x4c8707;try{_0x4c8707=await this['profilePictureUrl'](_0x2f7dc0[_0xd204da(0x10a)],_0xd204da(0x101));}catch{_0x4c8707=_0xd204da(0x102);}_0x45f4a2=await new _0x202df0['Up']()[_0xd204da(0xfa)](_0x4c8707)[_0xd204da(0x10b)](),_0x395aad=_0x45f4a2[_0xd204da(0x103)](),await this['sendMessage'](_0x2f7dc0[_0xd204da(0xea)],{'image':_0x395aad,'caption':_0xf9f74f},{'quoted':_0x2f7dc0});}catch{await _0x2f7dc0[_0xd204da(0x115)](_0xf9f74f);}}}export const disabled=![];let handler=async(_0x450436,{conn:_0x29e30d})=>{var _0xdc7e19=_0x5caf59;let _0x57b568=_0xdc7e19(0x108);_0x29e30d[_0xdc7e19(0xfe)](_0x450436[_0xdc7e19(0xea)],{'text':_0x57b568,'contextInfo':{'externalAdReply':{'title':'Victoria\x20Rosalind','body':_0xdc7e19(0x10f),'thumbnailUrl':_0xdc7e19(0xef),'sourceUrl':_0xdc7e19(0xf7),'mediaType':0x1,'renderLargerThumbnail':!![]}}});};handler[_0x5caf59(0xf2)]=[_0x5caf59(0xe5),'sc'],handler[_0x5caf59(0xe1)]=[_0x5caf59(0x119)],handler[_0x5caf59(0x11f)]=/^(sourcecode|sc)$/i;function _0x4c05(){var _0x457629=['initiate','sourcecode','level','Omniscient','1164684lVmtkI','story9','chat','Apocalype','story14','Archon','177390XwsGxF','https://i.postimg.cc/WbtRbPNN/Victoria-V3-min.jpg','story5','story16','help','story23','multiplier','Champion','2640729cyIXvK','https://www.youtube.com/c/ClayzaAubert','users','Warlord','setAvatar','story15','6rEOPQi','story11','sendMessage','Primodial','Astralancer','image','https://i.ibb.co/m53WF9N/avatar-contact.png','toBuffer','Demigod','Ascendancy','2817120ovqfjh','story13','===[\x20INFO\x20]===\x0aNAME\x20BOT:\x20Victoria\x20Rosalind\x0aVERSI:\x204.2\x0aOWNER:\x20Clayza\x20Aubert\x0aWEB:\x20https://clayzaaubert.my.id\x0a\x0a===[\x20NOTE\x20]===\x0aSc\x20ini\x20free,\x20jika\x20ingin\x20silakan\x20kunjungi\x20yt\x20Clayza\x20Aubert.\x0a\x0a===[\x20LINK\x20]===\x0aSC\x20VICTORIA\x20ROSALIND:\x20https://www.youtube.com/c/ClayzaAubert\x0a\x0a===[\x20TQTO\x20]===\x0a-\x20Nurutomo\x0a-\x20BochilGaming\x0a-\x20ImYanXiao\x0a-\x20ShirokamiRyzn\x0a-\x20Xyroinee\x0a-\x20Amelia\x20Aubert\x20(Story)\x0a-\x20Clara\x20Aubert\x20(Support)\x0a-\x20Clayza\x20Aubert\x20(Recode)\x0a\x0aScript\x20Ini\x20Di\x20Kode\x20Ulang\x20Oleh:\x20*Clayza\x20Aubert*\x0a','repeat','sender','toAttachment','story32','story10','Ascendant','Clayza\x20Aubert','Celestial','story24','story26','657936iFQBLB','51394crllbm','reply','Cosmic','story4','*\x0a\x0a\x20_*Destiny\x27s\x20Radiance:\x20The\x20mystery\x20of\x20eternity*_\x0a\x0a','info','Eternity','Vanquisher','autolevelup','\x0a\x09\x09','data','command','10yVvEsE','story18','Acolyte','Dawnbreaker','377732CBapKZ','Elite','Worldbreaker','story28','story19','Voidwalker','385utpgLh','story30','9QzmKhJ','_Naikan\x20Level\x20kamu\x20untuk\x20cerita\x20selanjutnya.._','story12','story1','Sentinel','story22','Mythic','Vanguard','Divine','tags','story29','role'];_0x4c05=function(){return _0x457629;};return _0x4c05();}export default handler;