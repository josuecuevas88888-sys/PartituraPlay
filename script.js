const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheet", {
  drawTitle: true
});

const partitura =
  "https://opensheetmusicdisplay.github.io/demo/sheet-music/MuzioClementi_SonatinaOpus36No1_Part1.xml";

async function cargar() {
  await osmd.load(partitura);
  osmd.render();
}
cargar();

const synth = new Tone.PolySynth().toDestination();

async function reproducir() {
  await Tone.start();
  synth.triggerAttackRelease(["Do4", "Mi4", "Sol4"], "2n");
}

function detener() {
  synth.releaseAll();
}
