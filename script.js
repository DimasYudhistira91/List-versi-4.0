var judulDOM = document.getElementById('judul');
var nama = prompt('Silahkan masukkan nama anda');
judulDOM.innerHTML = 'Selamat Datang ' + nama;

// Script Jam Digital

function tampilJam() {
  var waktu = new Date();
  var h = waktu.getHours();
  var m = waktu.getMinutes();
  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  var jam = h + ':' + m;
  var frameJam = document.getElementById('jam-digital');
  frameJam.innerHTML = jam;
}
setInterval(tampilJam, 1000);

// function tampilTanggal() {
//   var tanggalan = new Date();
//   var tahun = tanggalan.getFullYear();
//   var bulan = tanggalan.getMonth();
//   var hari = tanggalan.getDay();
  
//   bulan = (bulan < 10) ? '0' + bulan : bulan;
//   hari = (hari < 10) ? '0' + hari : hari;
//   var tanggal = hari + '/' + bulan + "/" + tahun;
//   var frameTanggal = document.getElementById('tanggal');
//   frameTanggal.innerHTML = tanggal;
// }
// setTimeout(tampilTanggal, 1000);
 
var inputKegiatanDOM = document.getElementById('input-kegiatan');
var simpanDOM = document.getElementById('simpan');
var listKegiatanDOM = document.getElementById('ul');
var activity = localStorage.getItem('activity');
listKegiatanDOM.innerHTML = activity;

simpanDOM.addEventListener('click', function() {
  var kegiatan = inputKegiatanDOM.value;
  if (kegiatan === "") {
    alert('Kegiatan harus diisi!')
  } else {
  // menampilkan data ke dalam list
  listKegiatanDOM.innerHTML += '<li id="li">' + kegiatan + '<button id="delete" class="delete btn btn-danger">x</button><hr></li>';
  inputKegiatanDOM.value = "";

  var hapus = document.querySelectorAll('.delete');
  console.log(hapus);
  for (let i = 0; i < hapus.length; i++) {
    hapus[i].addEventListener('click', function(e) {
      e.target.parentElement.style.display = 'none';
    });
  }
  
  localStorage.setItem('activity', listKegiatanDOM.innerHTML);

  }
});

