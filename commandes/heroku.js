const a33_0x133d8a=a33_0xaa7a;(function(_0x41a9b7,_0x3720bc){const _0x289415=a33_0xaa7a,_0x4b1630=_0x41a9b7();while(!![]){try{const _0x4b8d80=-parseInt(_0x289415(0x1c8))/0x1*(-parseInt(_0x289415(0x1bf))/0x2)+parseInt(_0x289415(0x1ad))/0x3*(-parseInt(_0x289415(0x1eb))/0x4)+parseInt(_0x289415(0x19d))/0x5+parseInt(_0x289415(0x1be))/0x6*(-parseInt(_0x289415(0x1a9))/0x7)+-parseInt(_0x289415(0x1df))/0x8+-parseInt(_0x289415(0x1d4))/0x9*(-parseInt(_0x289415(0x1e2))/0xa)+parseInt(_0x289415(0x1f1))/0xb;if(_0x4b8d80===_0x3720bc)break;else _0x4b1630['push'](_0x4b1630['shift']());}catch(_0x223431){_0x4b1630['push'](_0x4b1630['shift']());}}}(a33_0x4dd5,0xacc59));function a33_0xaa7a(_0x5e3755,_0x4d6727){const _0x1f0815=a33_0x4dd5();return a33_0xaa7a=function(_0x436f73,_0x494139){_0x436f73=_0x436f73-0x198;let _0x4dd5f7=_0x1f0815[_0x436f73];return _0x4dd5f7;},a33_0xaa7a(_0x5e3755,_0x4d6727);}const {zokou}=require(a33_0x133d8a(0x1e6)),s=require(a33_0x133d8a(0x1ec)),fs=require('fs'),dotenv=require(a33_0x133d8a(0x1af));function getDescriptionFromEnv(_0x24f7af){const _0x21a1f0=a33_0x133d8a;filePath='./app.json';const _0x4c6300=fs[_0x21a1f0(0x1dd)](filePath,_0x21a1f0(0x1ef)),_0x4f2dfc=JSON[_0x21a1f0(0x1d5)](_0x4c6300),_0x3b08a6=_0x4f2dfc[_0x21a1f0(0x1da)][_0x24f7af];return _0x3b08a6&&_0x3b08a6[_0x21a1f0(0x1bb)]?_0x3b08a6['description']:_0x21a1f0(0x19c);}zokou({'nomCom':a33_0x133d8a(0x1f2),'categorie':a33_0x133d8a(0x19b),'description':a33_0x133d8a(0x1d6)},async(_0x2023f8,_0x449747,_0x5c07a0)=>{const _0x266b6c=a33_0x133d8a,{ms:_0x2791a3,repondre:_0x1e059c,superUser:_0xf264c9,arg:_0x44e695}=_0x5c07a0;if(!_0xf264c9){_0x1e059c(_0x266b6c(0x1ed));return;};if(s[_0x266b6c(0x1cd)]==null||s[_0x266b6c(0x19f)]==null){_0x1e059c('Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables');return;};if(!_0x44e695[0x0]||!_0x44e695[_0x266b6c(0x1e5)]('')[_0x266b6c(0x1d9)]('=')){_0x1e059c(_0x266b6c(0x1e4));return;};const _0x1aca38=_0x44e695[_0x266b6c(0x1e5)]('\x20'),_0x45f36d=require(_0x266b6c(0x1c5)),_0x1c95a5=new _0x45f36d({'token':s['HEROKU_APY_KEY']});let _0x273a62=_0x266b6c(0x1e1)+s['HEROKU_APP_NAME'];await _0x1c95a5['patch'](_0x273a62+_0x266b6c(0x1d7),{'body':{[_0x1aca38[_0x266b6c(0x1d9)]('=')[0x0]]:_0x1aca38[_0x266b6c(0x1d9)]('=')[0x1]}}),await _0x1e059c(_0x266b6c(0x1cc));}),zokou({'nomCom':a33_0x133d8a(0x1bd),'categorie':a33_0x133d8a(0x19b),'description':'get\x20all\x20heroku\x20vars'},async(_0x11487a,_0x3ebb5c,_0x482621)=>{const _0x55d2d8=a33_0x133d8a,{ms:_0xdcc0da,repondre:_0x384994,superUser:_0x51f7b4,arg:_0x3a3bce}=_0x482621;if(!_0x51f7b4){_0x384994(_0x55d2d8(0x19a));return;};if(s[_0x55d2d8(0x1cd)]==null||s[_0x55d2d8(0x19f)]==null){_0x384994(_0x55d2d8(0x1ea));return;};const _0x51bc18=require(_0x55d2d8(0x1c5)),_0xdce404=new _0x51bc18({'token':s['HEROKU_APY_KEY']});let _0xbd8a38='/apps/'+s[_0x55d2d8(0x1cd)],_0x47049d=await _0xdce404[_0x55d2d8(0x1b2)](_0xbd8a38+'/config-vars'),_0xaaeb86=_0x55d2d8(0x1d1);for(vr in _0x47049d){_0xaaeb86+=_0x55d2d8(0x1a6)+vr+'*\x20'+'=\x20'+_0x47049d[vr]+'\x0a';}_0x384994(_0xaaeb86);}),zokou({'nomCom':a33_0x133d8a(0x1e0),'categorie':a33_0x133d8a(0x19b),'description':'get\x20a\x20heroku\x20var'},async(_0x4c604f,_0x38bdcd,_0x5f598)=>{const _0x3a4c0f=a33_0x133d8a,{ms:_0x5d32f6,repondre:_0x57426b,superUser:_0x44ab9d,arg:_0x2132ad}=_0x5f598;if(!_0x44ab9d){_0x57426b('Only\x20Mods\x20can\x20use\x20this\x20command');return;};if(s[_0x3a4c0f(0x1cd)]==null||s[_0x3a4c0f(0x19f)]==null){_0x57426b(_0x3a4c0f(0x1ea));return;};if(!_0x2132ad[0x0]){_0x57426b('insert\x20the\x20variable\x20name\x20in\x20capital\x20letter');return;};try{const _0x13a40b=require(_0x3a4c0f(0x1c5)),_0x26609d=new _0x13a40b({'token':s[_0x3a4c0f(0x19f)]});let _0x551c10=_0x3a4c0f(0x1e1)+s[_0x3a4c0f(0x1cd)],_0x3c5941=await _0x26609d['get'](_0x551c10+_0x3a4c0f(0x1d7));for(vr in _0x3c5941){if(_0x2132ad[_0x3a4c0f(0x1e5)]('\x20')===vr)return _0x57426b(vr+'=\x20'+_0x3c5941[vr]);}}catch(_0x4d48ad){_0x57426b(_0x3a4c0f(0x1d0)+_0x4d48ad);}}),zokou({'nomCom':a33_0x133d8a(0x1b6),'categorie':a33_0x133d8a(0x1e3),'description':a33_0x133d8a(0x1b9)},async(_0x22a90b,_0x3a0b49,_0xb0bac1)=>{const _0x3f06a2=a33_0x133d8a,{ms:_0x1778e3,repondre:_0x20e24a,superUser:_0x1d63b6,auteurMessage:_0x3dfda8}=_0xb0bac1;if(!_0x1d63b6){_0x20e24a(_0x3f06a2(0x1a3));return;};let _0x3d9ece=[{'nom':_0x3f06a2(0x1d2),'choix':[_0x3f06a2(0x1bc),'no']},{'nom':'AUTO_DOWNLOAD_STATUS','choix':[_0x3f06a2(0x1bc),'no']},{'nom':_0x3f06a2(0x1b8),'choix':[_0x3f06a2(0x1bc),'no']},{'nom':'PUBLIC_MODE','choix':[_0x3f06a2(0x1bc),'no']},{'nom':_0x3f06a2(0x1ca),'choix':[_0x3f06a2(0x1bc),'no']},{'nom':_0x3f06a2(0x1a7),'choix':[_0x3f06a2(0x1bc),'no']},{'nom':_0x3f06a2(0x1a1),'choix':['1','2','3','4']},{'nom':'PM_CHATBOT','choix':['yes','no']},{'nom':'ANTI_COMMAND_SPAM','choix':[_0x3f06a2(0x1bc),'no']}];function _0x46a4bd(_0x4eea55,_0x2c10b0){const _0x365940=_0x3f06a2;if(_0x4eea55[_0x365940(0x1b3)]<_0x2c10b0[_0x365940(0x1b3)])return-0x1;if(_0x4eea55[_0x365940(0x1b3)]>_0x2c10b0['nom'])return 0x1;return 0x0;}_0x3d9ece[_0x3f06a2(0x19e)](_0x46a4bd);let _0x19af99=_0x3f06a2(0x1a5);for(v=0x0;v<_0x3d9ece[_0x3f06a2(0x1ba)];v++){_0x19af99+=v+0x1+_0x3f06a2(0x1a2)+_0x3d9ece[v][_0x3f06a2(0x1b3)]+'*\x0a';}_0x19af99+=_0x3f06a2(0x1c4);let _0x4f6bef=await _0x3a0b49['sendMessage'](_0x22a90b,{'text':_0x19af99},{'quoted':_0x1778e3});console[_0x3f06a2(0x1d8)](_0x4f6bef);let _0x58a466=await _0x3a0b49['awaitForMessage']({'chatJid':_0x22a90b,'sender':_0x3dfda8,'timeout':0xea60,'filter':_0x11b80a=>_0x11b80a['message'][_0x3f06a2(0x1c3)]&&_0x11b80a[_0x3f06a2(0x1c1)][_0x3f06a2(0x1c3)][_0x3f06a2(0x1b4)][_0x3f06a2(0x1dc)]==_0x4f6bef[_0x3f06a2(0x1e8)]['id']&&(_0x11b80a[_0x3f06a2(0x1c1)][_0x3f06a2(0x1c3)][_0x3f06a2(0x1ab)]>0x0&&_0x11b80a[_0x3f06a2(0x1c1)][_0x3f06a2(0x1c3)][_0x3f06a2(0x1ab)]<=_0x3d9ece[_0x3f06a2(0x1ba)])}),_0x69d604=_0x58a466['message']['extendedTextMessage']['text']-0x1,{nom:_0x578334,choix:_0x25f0c4}=_0x3d9ece[_0x69d604],_0x258a95=_0x3f06a2(0x1a5);_0x258a95+=_0x3f06a2(0x1b7)+_0x578334+'\x0a',_0x258a95+=_0x3f06a2(0x1ae)+getDescriptionFromEnv(_0x578334)+'\x0a\x0a',_0x258a95+=_0x3f06a2(0x1db);for(i=0x0;i<_0x25f0c4[_0x3f06a2(0x1ba)];i++){_0x258a95+=_0x3f06a2(0x1ce)+(i+0x1)+'*\x20=>\x20'+_0x25f0c4[i]+'\x0a';}_0x258a95+=_0x3f06a2(0x1b5);let _0x5d441e=await _0x3a0b49['sendMessage'](_0x22a90b,{'text':_0x258a95},{'quoted':_0x58a466}),_0x3e7e0b=await _0x3a0b49[_0x3f06a2(0x1c7)]({'chatJid':_0x22a90b,'sender':_0x3dfda8,'timeout':0xea60,'filter':_0x48d8f3=>_0x48d8f3[_0x3f06a2(0x1c1)][_0x3f06a2(0x1c3)]&&_0x48d8f3['message']['extendedTextMessage'][_0x3f06a2(0x1b4)]['stanzaId']==_0x5d441e['key']['id']&&(_0x48d8f3[_0x3f06a2(0x1c1)]['extendedTextMessage'][_0x3f06a2(0x1ab)]>0x0&&_0x48d8f3[_0x3f06a2(0x1c1)][_0x3f06a2(0x1c3)][_0x3f06a2(0x1ab)]<=_0x25f0c4[_0x3f06a2(0x1ba)])}),_0x49e163=_0x3e7e0b[_0x3f06a2(0x1c1)]['extendedTextMessage'][_0x3f06a2(0x1ab)]-0x1;if(s[_0x3f06a2(0x1cb)]=='no')try{const _0x453ea5=dotenv[_0x3f06a2(0x1d5)](fs['readFileSync'](_0x3f06a2(0x199),{'encoding':_0x3f06a2(0x1ef)}));_0x453ea5[_0x578334]=_0x25f0c4[_0x49e163];const _0x41e94f=Object['keys'](_0x453ea5)[_0x3f06a2(0x1e9)](_0x2b690f=>_0x2b690f+'='+_0x453ea5[_0x2b690f])['join']('\x0a');fs[_0x3f06a2(0x1ac)]('set.env',_0x41e94f),_0x20e24a(_0x3f06a2(0x198));const {exec:_0x563f2e}=require('child_process');_0x563f2e(_0x3f06a2(0x1a8));}catch(_0x284a0c){console[_0x3f06a2(0x1f4)](_0x284a0c),_0x20e24a(_0x3f06a2(0x1d0));}else{if(s[_0x3f06a2(0x1cd)]==null||s[_0x3f06a2(0x19f)]==null){_0x20e24a('Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables');return;};const _0x16064c=require(_0x3f06a2(0x1c5)),_0x521885=new _0x16064c({'token':s[_0x3f06a2(0x19f)]});let _0x16e01d=_0x3f06a2(0x1e1)+s[_0x3f06a2(0x1cd)];await _0x521885['patch'](_0x16e01d+_0x3f06a2(0x1d7),{'body':{[_0x578334]:_0x25f0c4[_0x49e163]}}),await _0x20e24a(_0x3f06a2(0x1f3));}});function changevars(_0xa41969,_0x294fac){const _0x4aa666=(function(){let _0x51e0de=!![];return function(_0x2c9b6c,_0x4697d1){const _0x222c97=_0x51e0de?function(){const _0xfcb906=a33_0xaa7a;if(_0x4697d1){const _0x477879=_0x4697d1[_0xfcb906(0x1d3)](_0x2c9b6c,arguments);return _0x4697d1=null,_0x477879;}}:function(){};return _0x51e0de=![],_0x222c97;};}()),_0x1c8bcf=_0x4aa666(this,function(){const _0x316e1a=a33_0xaa7a;return _0x1c8bcf[_0x316e1a(0x1c9)]()[_0x316e1a(0x1cf)](_0x316e1a(0x1f0))[_0x316e1a(0x1c9)]()[_0x316e1a(0x1de)](_0x1c8bcf)[_0x316e1a(0x1cf)](_0x316e1a(0x1f0));});_0x1c8bcf(),zokou({'nomCom':_0xa41969,'categorie':'Heroku'},async(_0x5b3184,_0x3c2192,_0x393619)=>{const _0x251b85=a33_0xaa7a,{arg:_0x3d776c,superUser:_0x6330e9,repondre:_0x3a1f2b}=_0x393619;if(!_0x6330e9){_0x3a1f2b(_0x251b85(0x1a3));return;};if(!_0x3d776c[0x0]){_0x3a1f2b(getDescriptionFromEnv(_0x294fac));return;};if(s[_0x251b85(0x1cb)]=='no')try{const _0x429fb4=dotenv[_0x251b85(0x1d5)](fs[_0x251b85(0x1dd)](_0x251b85(0x199),{'encoding':'utf-8'}));_0x429fb4[_0x294fac]=_0x3d776c[_0x251b85(0x1e5)]('\x20');const _0x322480=Object['keys'](_0x429fb4)[_0x251b85(0x1e9)](_0xbf932e=>_0xbf932e+'='+_0x429fb4[_0xbf932e])[_0x251b85(0x1e5)]('\x0a');fs[_0x251b85(0x1ac)]('set.env',_0x322480),_0x3a1f2b(_0x251b85(0x198));const {exec:_0x7de845}=require(_0x251b85(0x1c0));_0x7de845(_0x251b85(0x1a8));}catch(_0x2781b7){console[_0x251b85(0x1d8)](_0x2781b7),_0x3a1f2b('Error');}else{if(s[_0x251b85(0x1cd)]==null||s[_0x251b85(0x19f)]==null){_0x3a1f2b(_0x251b85(0x1ea));return;};const _0x537e4b=require(_0x251b85(0x1c5)),_0x110661=new _0x537e4b({'token':s[_0x251b85(0x19f)]});let _0xc67a29=_0x251b85(0x1e1)+s['HEROKU_APP_NAME'];await _0x110661[_0x251b85(0x1c2)](_0xc67a29+_0x251b85(0x1d7),{'body':{[_0x294fac]:_0x3d776c['join']('\x20')}}),await _0x3a1f2b(_0x251b85(0x1f3));}});}function a33_0x4dd5(){const _0x11808a=['../framework/zokou','BOT_NAME','key','map','Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables','61508YeyCbQ','../set','only\x20Mods\x20can\x20use\x20this\x20commande','linkmenu','utf-8','(((.+)+)+)+$','11581724xIzuav','setvar','variable\x20refresh,\x20restart\x20in\x20progress....','error','variable\x20refresh\x0a\x20restart\x20in\x20progress....','set.env','only\x20mods\x20can\x20use\x20this\x20commande','heroku','The\x20environment\x20variable\x20description\x20was\x20not\x20found.','5052180tGPRBq','sort','HEROKU_APY_KEY','setprefix','PRESENCE','-\x20*','command\x20reserved\x20for\x20bot\x20owner','botname','\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Zokou-settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a','🍁\x20*','ANTI_VIEW_ONCE','pm2\x20restart\x20all','7EWCeGK','warncount','text','writeFileSync','39JzbHrE','*Description*\x20:','dotenv','PREFIX','BOT_MENU_LINKS','get','nom','contextInfo','\x0a└──────\x20⋆⋅☆⋅⋆\x20──────┘\x0a\x0aPlease\x20reply\x20on\x20message\x20with\x20the\x20number\x20corresponding\x20to\x20your\x20choice','settings','*Name*\x20:','PM_PERMIT','edit\x20settings\x20of\x20the\x20bot','length','description','yes','getallvar','8036478NlVPye','12tqIXuY','child_process','message','patch','extendedTextMessage','\x0aChoose\x20a\x20variable\x20by\x20its\x20number','heroku-client','WARN_COUNT','awaitForMessage','173297fKEVlN','toString','STARTING_BOT_MESSAGE','HEROKU','Heroku\x20var\x20changes\x20,\x20rebootings....','HEROKU_APP_NAME','*\x20*','search','Error','*Heroku\x20Vars\x20list\x20*\x0a\x0a','AUTO_READ_STATUS','apply','9DkpsIg','parse','set\x20a\x20heroku\x20var','/config-vars','log','split','env','┌──────\x20⋆⋅☆⋅⋆\x20──────┐\x0a\x0a','stanzaId','readFileSync','constructor','8309120NerBPl','getvar','/apps/','1825250NnGOqf','Heroku','Bad\x20format\x20;\x20Exemple\x20of\x20using\x20:\x0asetvar\x20OWNER_NAME=Fredora','join'];a33_0x4dd5=function(){return _0x11808a;};return a33_0x4dd5();};changevars(a33_0x133d8a(0x1a0),a33_0x133d8a(0x1b0)),changevars(a33_0x133d8a(0x1ee),a33_0x133d8a(0x1b1)),changevars(a33_0x133d8a(0x1aa),a33_0x133d8a(0x1c6)),changevars(a33_0x133d8a(0x1a4),a33_0x133d8a(0x1e7));