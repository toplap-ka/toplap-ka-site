const raw = (s) => s.raw;
export let shuffle = function (a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export function escapeHtml(unsafe) {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const collection = {
  sc1: {
    title: "Powerset",
    code: raw`
"_\\|/_".powerset.flat.join
          _\_\|_|\
         |_\|/_/\/
         _\/|/_|/\
         |/_\|/___
         \__\_|__|
         _\|__\|_/
         __/_\/__\
         /_|/__|/_
         \|/__\|/_
 `,
  },
  sc2: {
    author: "Matthias Schneiderbanger",
    title: "Clicks and Cuts",
    twitter: "https://twitter.com/schneiderbanger/status/389817867715092480",
    soundcloud: "https://on.soundcloud.com/KCTNk",
    code: raw`play({a=LFNoise0.kr([5,6]);CombC.ar(RLPF.ar(Saw.ar(a.range(1,6)),a.range(1e3,1.5e4),3e-4),1,LFNoise0.kr(1).range(0.02,1),8)*0.01})`,
  },
  sc3: {
    author: "Matthias Schneiderbanger",
    title: "Deterministic Sorting",
    twitter: "https://twitter.com/schneiderbanger/status/225197213536620545",
    soundcloud: "https://on.soundcloud.com/8dj7s",
    code: raw`play{LFTri.ar(DegreeToKey.kr(as(Scale.zhi,LocalBuf),Demand.kr(Saw.kr(10),0,Dseq((1..12).powerset.flat)),12,1,[42,49]).midicps)}`,
  },
  sc4: {
    author: "Elmo",
    title: "Strings",
    code: raw`play{LFTri.ar(DegreeToKey.kr(as(Scale.zhi,LocalBuf),Demand.kr(Saw.kr(10),0,Dseq((1..12).powerset.flat)),12,1,[42,49]).midicps)}`,
  },
  sc5: {
    author: "Elmo",
    title: "Happy Floppy",
    code: raw`play{a=LFNoise0;Splay.ar(Formant.ar((1..8).collect(_* 50),a.ar((1..3)).range(50, a.ar(1).range(50,2000)),a.ar((1..4)).range(50,1500)))/3}`,
  },
  sc6: {
    author: "dkh",
    title: "angry waves n beats",
    code: raw`play{a=LFNoise0;Splay.ar(Formant.ar((1..8).collect(_* 50),a.ar((1..3)).range(50, a.ar(1).range(50,2000)),a.ar((1..4)).range(50,1500)))/3}`,
  },
  sc7: {
    author: "dkh",
    title: "delay delights",
    code: raw`{var a=LFNoise2;LeakDC.ar(CombC.ar(Decay2.ar(Impulse.ar(a.ar(1).range(1,2)))*SinOsc.ar(99),4,a.ar(a.ar(1!2).range(1,2)).range(1/99,4),9))}.play;`,
  },
  sc8: {
    author: "luiiuuuiiiii",
    title: "waits",
    code: raw`{inf.do{1.wait}}.fork
{1.do{inf.wait}}.fork`,
  },
  sc9: {
    author: "Jakob Schreiber",
    title: "soft to wicked",
    code: raw`play{l=LFNoise2;Mix.ar(DFM1.ar(SinOsc.ar([40,41,50,150]*l.ar(l.ar(2,0.4,0.5).poll,4,5).floor),l.ar(0.2,990,1000),l.ar(0.2,1,1)*2))!2/10}`,
  },
  hd1: {
    author: "Paul Henri",
    title: "Glitch Juice",
    url: "https://hydra.ojack.xyz/?sketch_id=Pr16zeXkfaLUd5Kd",
    code: raw`// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// glitch juice
// By paul henri

src(o0)
.scale(1.001,1,1,0.5,0.5)
.color(0.999,0.999)
.modulate(src(o0),0.0005)
.hue(0.001)
.luma(0.3,0.2)
.rotate(0.001)
.layer(
  osc(10,0.03,1)
  .mask(noise(2,0.1).brightness(1).luma(1,0))
  .colorama(0.2)
  .saturate(0.5)
  .modulate(noise(4,0.05),0.05)
  .luma(0.4,0)
)
.out()`,
  },
  h2: {
    author: "Paul Henri",
    title: "Lava Lamp 2",
    urL: "https://hydra.ojack.xyz/?sketch_id=ExeOTZVE9hrn6IIW",
    code: raw`// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// lava lamp 2
// paul henri

osc(6,0,1.8).mask( //shape(99,0.5,0.00004).mask(
  shape(4,0.5,0.0001).scale(1,0.9,2)
  .sub(
    shape(99,0.1,0.6)
    .mult(
      osc(20,0.1)
      .modulateScale(shape(99,0.2,0.2),4)
      .luma(0.2,1)
    )
    )
)
//.sub(shape(99,0.1,0.04).mult(osc(6,0.1,0).luma()))
.colorama(0.18)
.saturate(0.8)
.out()`,
  },
  hd3: {
    author: "nervousdata",
    title: "Spalten Mengen Platten",
    urL: "https://hydra.ojack.xyz/?sketch_id=vcWMV3vi1ykmd9U1",
    code: raw`// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by nervousdata
saetz = ["geraden Linien", "gezogenen Geraden", "geschlossenen Bahnen", "entsprechenden Mengen", "horizontalen Platten", "derartigen Spalten", "vorherigen Knoten", "wirklichen Wellen", "leitenden Massen", "wenigen Minuten", "weiteren Zeiten", "erregten Funken", "übrigen Reihen", "vielen Seiten", "neuen Formen"];

p5 = new P5();

p5.draw = () => {
  drehe = Math.round(6.8*Math.sin(time*0.08)+6.8);
  ueber = Math.round(6.2*Math.sin(time*0.04)+6.2);
  setze = (match) => {
    return saetz[ueber+1] };
  zeile = saetz[drehe];
  funke = zeile.replace(/\b[A-Z]\w+\b/, setze);
  p5.background(220,240,230);
  p5.fill(0,10,20);
  p5.textSize(64);
  p5.textFont("serif");
  p5.text("die " + zeile + "," + "\n" + funke, p5.windowWidth*0.2, p5.windowHeight*0.35, p5.windowWidth*1, p5.windowHeight);
}

p5.hide();

s0.init({ src: p5.canvas });

spalt = () => src(s0)
platt = () => osc(() => 8*Math.sin(time*0.2),0,0).posterize(() => drehe).rotate(() => Math.PI*0.45)
spalt()
	.modulateScrollY(platt(),0.16)
	.layer(src(o0).scrollY(() => -(0.02*Math.sin(time*0.5)+0.02)).mask(shape(4,1,0.0001).scale(0.5,2).scrollY(-0.22,0))
          .hue(0.52))
.out(o0);`,
  },
  hd4: {
    author: "nervousdata",
    title: "The Twisting",
    url: "https://hydra.ojack.xyz/?sketch_id=rhKdR4tUnVqL9gzX",
    code: raw`// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by nervousdata


height = window.innerHeight*0.07
mass = "The twisting of the largest cables, the rolling, hammering, and cutting large masses of iron, the draining of our mines. "

p5 = new P5();

p5.draw = () => {
  p5.background(230,240,230);
  p5.fill(0,0,0);
  p5.textSize(height);
  p5.textLeading(height * 1.5);
  p5.textFont("serif");
  p5.text(mass + "\n" + mass + "\n" + mass + "\n" + mass, 5, 100, p5.windowWidth, p5.windowHeight);
} // Charles Babbage

p5.hide();

s0.init({ src: p5.canvas });

mill = () => osc(22,0.02,0).posterize(8).thresh(0.5)
text = () => src(s0)
text()
  .scrollX(0.1,-0.011).mask(mill())
  .add(text().scrollX(0.1,0.012).mask(mill().invert(1)))
.layer(src(o0).mask(mill().diff(mill().rotate(Math.PI*0.25)).scale(0.75),0.01))
.out(o0);`,
  },
  st1: {
    author: "Felix Roos",
    title: "Geistkrümel",
    software: "Strudel",
    url: "https://strudel.tidalcycles.org/?7VoIcReDMO-M",
    code: raw`
n(run(8).palindrome())
.chord("<Dm7[G7 A7]>")
.voicing()  .s("sine")
.add.squeeze(n("0 .25"
)).room(1).clip(cosine
.range(.1,2) .slow(4))
.echoWith(4,.1,(x,n)=>
x .add(note(n * .25)))
.slow(4).punchcard({})
`,
  },
  st2: {
    author: "Felix Roos",
    title: "Jux Engine",
    software: "Strudel",
    url: "https://strudel.tidalcycles.org/?dDsZmIqDmCXf",
    code: `
s("bd rim, [~ hh*2]")
.bank( "RolandTR909")
.fit().jux(rev).chunk
(4, mul( speed(0.5)))
.restart(\`<x@7 x(5,8)
>\`).jux(x => x .gain(
rand).rev()).stack(s(
"sawtooth").euclidRot
(3,8,4).lpf(800).lpq(
saw.range(1,9)))// fr
`,
  },
  st3: {
    author: "Felix Roos",
    title: "Well Tampered",
    software: "Strudel",
    url: "https://strudel.tidalcycles.org/?kl_UEvr3rc07",
    code: `
n(run(12)).chord("D")
.voicing().s("piano")
.add( "<-1 0 1 0>/4")
.jux(rev).lpq(4).lpf(
saw.range(100,4000)).
rarely(add(note(12)))
.add(note(perlin.div(
2))).lastOf(4,rev)///
.sub(note("12[0 2]"))
.slow(2)  .room(sine)
.pianoroll({fold:1 })`,
  },
  st4: {
    author: "Felix Roos",
    title: "Blue Screen of Breath",
    software: "Strudel",
    url: "https://strudel.tidalcycles.org/?VUbgKpHsf-G9",
    code: `
let chords =chord(\`<
C^7 F^7 Eb^7 Ab^7>\`)
stack(n(run(12).slow
(2)).jux(x=>x.rev().
late(.5)).set(chords
).offset(\`<0 1 2 1 0 
-1 -2 -1>/2\`.add(1))
.voicing().clip("2")
.delay(.5).gain(sine
.range(.2,1).fast(.9
)),chords.rootNotes(
2)).piano().add(note
(perlin.range(0,.25)
)).punchcard() // <3`,
  },
};
