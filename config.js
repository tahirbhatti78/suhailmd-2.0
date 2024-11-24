const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_13_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZYmUvM21od0F5Q2xMejhSNHM2N1owcWFMUFROcFp4VWo2aDlMMzFSQVRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTek9UTmpld1RQeTdRVl9zclpKR253XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJmNGM2N2IwLTI4YzAtNGJhYy05Yjc1LWY2NjQyOTViOTRkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMTk1LFxuICAgICAgMTE5LFxuICAgICAgMjA1LFxuICAgICAgMjIsXG4gICAgICAxNjIsXG4gICAgICA4MSxcbiAgICAgIDEwLFxuICAgICAgMjM4LFxuICAgICAgMjE2LFxuICAgICAgNDUsXG4gICAgICAyMDQsXG4gICAgICAyMzUsXG4gICAgICAxODIsXG4gICAgICAyMDMsXG4gICAgICAxNTUsXG4gICAgICAxMDIsXG4gICAgICAyMjUsXG4gICAgICA1MixcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDEyNSxcbiAgICAgIDQ1LFxuICAgICAgOTcsXG4gICAgICAxMzYsXG4gICAgICAxOTEsXG4gICAgICA0NixcbiAgICAgIDExNyxcbiAgICAgIDE0OSxcbiAgICAgIDgzLFxuICAgICAgMTA4LFxuICAgICAgOTAsXG4gICAgICAxOTcsXG4gICAgICA1NCxcbiAgICAgIDE5NCxcbiAgICAgIDM1LFxuICAgICAgMjA5LFxuICAgICAgMjE4LFxuICAgICAgMTU2LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdXWThZTDJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTE3NDg0NTY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTI4NDU4NDgwNTE5MzY6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONk4zOUFCRUpHa2k3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhLRG1aQkEvUmpmQmFhYzkzWmwzNVo5RGtmL3VDV2hQMUhycXZLYm52aW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiclRablA1SE85cC92SS9aUXdVSGFyYlYvMUJLa3MvYU0xQTRtTy9nVTRmYnUzamkzNytreDF3WlhxTTBUVVpkTW81VjhSN3FpQmQrY3lTZjVUaFhtQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOEh2OVVwMGlSMzRvZzcrOFdhZWN0a291UFU2RjcyT29jR0NvUU0yVVB2NWVWZ0hPSGZoU2dRU01GSnJ4Wk1BK2VtUGNTbmhVTWpvdkpGYjJrbzJ1anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTkxNzQ4NDU2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQzMjQwNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
