
const terminalMessages=["> BIRTHDAY HACKED!!!", "", "> Initializing birthday system...", "> Connecting to happiness database...", "> Searching for birthday person...", "", "> PERSON FOUND: MARIAN NICOLE", "> Birthday verification: CONFIRMED", "", "> Checking happiness level...", "> WARNING: More happiness required!", "", "> Preparing something special...", "> Loading birthday_surprise.exe..."];
const letter="dear marian nicole,\n\nhappy birthdayyy! 🎀\n\nI hope today reminds you of how special you are and how much happiness you deserve. I hope this new chapter brings you more reasons to smile, more memories to keep, and more moments that make you genuinely happy.\n\nSo ayun hehe medjo mahirap gumawa ng program nato, but I wanted to give you something different po, something that wasn’t just another “happy birthday” message. something made especially for you and for you only nikol nikol.\n\nand since it’s your day, i’ll admit one tiny thing...\n\nyour smile is kinda unfair.\n\nkasi somehow, seeing you smile can make an ordinary day feel a little better. and honestly, getting to know you has been one of those unexpected things that i’m really glad happened.\n\nstay being the marian nicole mangaser that you are, the independent, beautiful, funny, and amazing person that makes you, you. you don’t have to change anything just to impress anyone.\n\nI hope you achieve the things you’ve been quietly wishing for, and whenever things get tiring, I hope you remember that there are people cheering for you...\n\nand maybe there’s one person cheering just a little louder than the others. 🤭 hehe\n\nenjoy your day, birthday girl. you deserve all the good things coming your way. 💗\n\nhappy birthday again, nics. ♡\n\n— someone who spent way too much time coding this just to make you smile 💻💗";
const vaultMessages=["you have this way of making yourself noticeable without even trying. siguro it's your smile, your laugh, or simply the way you are. either way... ayun, I noticed hehe. ♡", "ayunnn, actually first time ko gumawa ng ganitong program at para sa isang tao. ang special mo sakinnn, hindi ko ma-explain e kung bakit sobrang sepcial mo pero yun nga, you're not exactly just “someone” to me either. i hope you will like this. ♡", "my wish for you is simple: I hope you become genuinely happy with where life takes you. I hope you reach the things you're working for and continue becoming the person you want to be. ♡", "if this program managed to make you smile even once, then every error, every missing semicolon, and every minute spent making it was worth it. BWHAHAHAHAHAHA ♡"];
const vaultTitles=["SOMETHING I NOTICED ABOUT YOU", "A TINY CONFESSION", "A BIRTHDAY WISH", "ONE LAST THING..."];
const finalMessages=["> birthday_surprise.exe", "", "> Finishing birthday protocol...", "", "> [OK] gift delivered", "> [OK] birthday letter delivered", "> [OK] secret messages unlocked", "> [OK] birthday wish sent", "", "> Running final check...", "", "> FINAL OBJECTIVE:", "> make marian nicole smile", "", "> STATUS:", "> hopefully successful ♡", "", "> and before this program ends...", "", "> happy birthday, nics. ♡", "", "> thank you for being one of the", "> unexpected good things in my life."];

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function show(id){$$('.screen').forEach(s=>s.classList.remove('active')); $('#'+id).classList.add('active'); window.scrollTo(0,0)}

async function typeLines(el,lines,speed=28){
 el.textContent='';
 for(const line of lines){for(const ch of line){el.textContent+=ch;await sleep(speed)}el.textContent+='\n';await sleep(80)}
}
async function boot(){
 await typeLines($('#terminalText'),terminalMessages,24);
 $('#progressWrap').classList.remove('hidden');
 for(let i=0;i<=100;i++){$('#progressBar').style.width=i+'%';$('#progressLabel').textContent=i+'%';await sleep(18)}
 $('#terminalText').textContent+='\n> SURPRISE READY!\n> Click OPEN SURPRISE to continue.\n';
 $('#openSurprise').classList.remove('hidden');
}
$('#openSurprise').onclick=()=>show('gift');

function confetti(){
 for(let i=0;i<110;i++){const p=document.createElement('i');p.className='confetti-piece';p.style.left=Math.random()*100+'vw';p.style.animationDuration=(2+Math.random()*3)+'s';p.style.animationDelay=Math.random()+'s';p.style.opacity=.5+Math.random()*.5;document.body.appendChild(p);setTimeout(()=>p.remove(),6000)}
}
$('#giftButton').onclick=()=>{$('#giftBefore').classList.add('hidden');$('#giftAfter').classList.remove('hidden');confetti()};
$('#toLetter').onclick=()=>{show('letter');typeLetter()};

let letterStarted=false;
async function typeLetter(){
 if(letterStarted)return;letterStarted=true;$('#letterText').textContent='';
 for(let i=0;i<letter.length;i++){
   $('#letterText').textContent+=letter[i];
   if(i%3===0) $('#letterText').scrollIntoView({block:'end'});
   await sleep(18);
 }
 $('#typingStatus').innerHTML='<em>made with a little code and a lot of thought ♡</em>';
 $('#toVault').classList.remove('hidden');
}
$('#toVault').onclick=()=>show('vault');

const opened=[false,false,false,false], unlocked=[true,false,false,false];
const progressTexts=['message 02 unlocked ♡','message 03 unlocked ♡','final message unlocked ♡','ALL MESSAGES UNLOCKED ♡'];
$$('.card-open').forEach((b,i)=>b.onclick=()=>openCard(i));
function openCard(i){
 if(!unlocked[i])return;
 const first=!opened[i];opened[i]=true;
 $('#modalTitle').textContent=vaultTitles[i];$('#modalMessage').textContent=vaultMessages[i];
 $('#modal').classList.remove('hidden');$('#modal').dataset.i=i;$('#modal').dataset.first=first?'1':'0';
}
$('#closeModal').onclick=()=>{
 const i=+$('#modal').dataset.i, first=$('#modal').dataset.first==='1';$('#modal').classList.add('hidden');
 const card=$$('.vault-card')[i],btn=card.querySelector('.card-open');
 btn.disabled=false;btn.textContent='OPEN AGAIN ♡';card.querySelector('.card-status').textContent='message received ♡';
 if(first){
   if(i<3){unlocked[i+1]=true;const next=$$('.vault-card')[i+1];const nb=next.querySelector('.card-open');nb.disabled=false;nb.textContent='OPEN ♡';next.querySelector('.card-status').textContent='UNLOCKED';}
   $('#vaultProgress').textContent=progressTexts[i];
   if(i===3)$('#toCake').classList.remove('hidden');
 }
};
$('#toCake').onclick=()=>show('cake');

$('#blow').onclick=async()=>{
 $('.flames').style.opacity='0';$('#blow').classList.add('hidden');$('#wish').innerHTML='<em>wish sent ♡</em>';confetti();
 await sleep(1200);$('#wish').classList.add('hidden');$('#afterWish').textContent='i hope that whatever you wished for finds its way to you. ♡';$('#toFinal').classList.remove('hidden');
};
$('#toFinal').onclick=()=>{show('final');startFinal()};
let finalStarted=false;
async function startFinal(){
 if(finalStarted)return;finalStarted=true;await typeLines($('#finalText'),finalMessages,28);
 $('#finalStatus').textContent='birthday_surprise.exe completed successfully ♡';await sleep(1400);
 $('#finalStatus').textContent='thank you for opening this little surprise ♡';$('#replay').classList.remove('hidden');
}
$('#replay').onclick=()=>location.reload();
boot();
