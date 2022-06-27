const trafo = [
    {
        "title": "L1,2,3 AKTİF GÜÇ",
        "id": "DB_1_EA_FAZ_1_2_3_AKTIF_GUC",
        "value": "DB_1_EA_FAZ_1_2_3_AKTIF_GUC",
        "unit": "kW"
    },
    {
        "title": "L1,2,3 GERİLİM",
        "id": "DB_1_EA_FAZ_1_2_3_VOLTAJ",
        "value": "DB_1_EA_FAZ_1_2_3_VOLTAJ",
        "unit": "V"
    },
    {
        "title": "L1,2,3 AKIM",
        "id": "DB_1_EA_FAZ_1_2_3_AKIM",
        "value": "DB_1_EA_FAZ_1_2_3_AKIM",
        "unit": "A"
    },
    {
        "title": "L1,2,3 GÜÇ FAKTÖRÜ",
        "id": "DB_1_EA_FAZ_1_2_3_GUC_FAKTORU",
        "value": "DB_1_EA_FAZ_1_2_3_GUC_FAKTORU",
        "unit": "PF"
    },

]

const ken = [
    {
        "title": "KEN 1 + KEN 2 TOPLAM AKTİF GÜÇ",
        "id": "DB_1_TOPLAM_KEN1_KEN2_UNITE3_UNITE4",
        "value": "DB_1_TOPLAM_KEN1_KEN2_UNITE3_UNITE4",
        "unit": "kW"
    },
    {
        "title": "KEN 1 AKTİF GÜÇ",
        "id": "DB_1_KEN_1_AKTIF_GUC",
        "value": "DB_1_KEN_1_AKTIF_GUC",
        "unit": "kW"
    },
    {
        "title": "KEN 1 REAKTİF GÜÇ",
        "id": "DB_1_KEN_1_REAKTIF_GUC_C",
        "value": "DB_1_KEN_1_REAKTIF_GUC_C",
        "unit": "kVARC"
    },
    {
        "name": "ken",
        "title": "KEN 2 AKTİF GÜÇ",
        "id": "DB_1_KEN_2_AKTIF_GUC",
        "value": "DB_1_KEN_2_AKTIF_GUC",
        "unit": "kW"
    },
    {
        "title": "KEN 2 REAKTİF GÜÇ",
        "id": "DB_1_KEN_2_REAKTIF_GUC_C",
        "value": "DB_1_KEN_2_REAKTIF_GUC_C",
        "unit": "kVARC"
    },
]

const ges1 = [
    {
        "title": "GES 1 + GES 2 TOPLAM AC GÜÇ",
        "id": "DB_1_TOPLAM_GES1_GES2_GES3_GES4",
        "value": "DB_1_TOPLAM_GES1_GES2_GES3_GES4",
        "unit": "W"
    },
    {
        "title": "GÜNLÜK ÜRETİLEN ENERJİ",
        "id": "DB_1_GES_1_GUNDE_URETILEN_ENERJI",
        "value": "DB_1_GES_1_GUNDE_URETILEN_ENERJI",
        "unit": "kWh"
    },
    {
        "title": "AC GÜÇ",
        "id": "DB_1_GES_1_AC_GUC",
        "value": "DB_1_GES_1_AC_GUC",
        "unit": "W"
    },
    {
        "title": "DC GÜÇ",
        "id": "DB_1_GES_1_DC_GUC",
        "value": "DB_1_GES_1_DC_GUC",
        "unit": "W"
    },
]

const ges2 = [
    {
        "title": "GÜNLÜK ÜRETİLEN ENERJİ",
        "id": "DB_1_GES_2_GUNDE_URETILEN_ENERJI",
        "value": "DB_1_GES_2_GUNDE_URETILEN_ENERJI",
        "unit": "kWh"
    },
    {
        "title": "AC GÜÇ",
        "id": "DB_1_GES_1_DC_GUC",
        "value": "DB_1_GES_1_DC_GUC",
        "unit": "W"
    },
    {
        "title": "GÜNLÜK ÜRETİLEN ENERJİ",
        "id": "DB_1_GES_2_AC_GUC",
        "value": "DB_1_GES_2_AC_GUC",
        "unit": "W"
    },
    {
        "title": "DC GÜÇ",
        "id": "DB_1_GES_2_DC_GUC",
        "value": "DB_1_GES_2_DC_GUC",
        "unit": "W"
    },
    {
        "title": "DC AKIM",
        "id": "DB_1_GES_2_DC_AKIM",
        "value": "DB_1_GES_2_DC_AKIM",
        "unit": "A"
    },
]

const kazan = [
    {
        "title": "GENERATOR AKTİF GÜÇ",
        "id": "DB_1_GENERATOR_AKTIF_GUC",
        "value": "DB_1_GENERATOR_AKTIF_GUC",
        "unit": "kW"
    },
    {
        "title": "GENERATOR REAKTİF GÜÇ",
        "id": "DB_1_GENERATOR_REAKTIF_GUC",
        "value": "DB_1_GENERATOR_REAKTIF_GUC",
        "unit": "kVAR"
    },
    {
        "title": "GENERATOR VOLTAJ L1-N",
        "id": "DB_1_GENERATOR_VOLTAJ_L1_N",
        "value": "DB_1_GENERATOR_VOLTAJ_L1_N",
        "unit": "V"
    },
    {
        "title": "GENERATOR AKIM L1",
        "id": "DB_1_GENERATOR_AKIM_L1",
        "value": "DB_1_GENERATOR_AKIM_L1",
        "unit": "A"
    },
]

function getData() {
    fetchData();
    setInterval(function () {
        fetchData();
    }, 1000)
}

function fetchData() {
    let array = [...trafo, ...ken, ...ges1, ...ges2, ...kazan]

    array.forEach(async value => {
        var myRequest = new Request(value.id + '.htm');
        await fetch(myRequest).then(async function (response) {
            await response.text().then(function (text) {
                document.getElementById(value.id).innerHTML = text
            });
        })
    });
}

window.addEventListener('DOMContentLoaded', async function () {

    await getData();

    document.body.innerHTML = `<div class="main center">
    <div class="content-wrapper">
      <div class="header">
        <div style="float: left" align="center">
          <img src="KIPAS.png" width="300px" height="120px" style="margin-top: 30px; margin-left: 10px" />
        </div>

        <div style="float: right" align="center">
          <a href="http://www.merkonotomasyon.com"><img src="merkon_logo.png" width="230px" height="210px"
              style="margin-top: 20px; margin-right: 15px; margin-bottom: 20px;" /></a>
        </div>
        <div class="header_2">
          <h1>
            <br /><br />
            KİPAŞ MENSUCAT <br /> ENERJİ İZLEME
          </h1>
        </div>
      </div>
      <div class="el-row">
        <div class="el-col el-col-24">
          <div class="divider">
            <h1 class="header-title center">
              KİPAŞ MENSUCAT TOPLAM ENERJİ İZLEME SİSTEMİ
            </h1>
          </div>
        </div>
      </div>
      <div id="toplamtable" class="table">
        <div class="table-wrapper">
			<table>
				<thead>
					<tr>
					    <th scope="col" colspan="3">TRAFO MERKEZİ</th>
					</tr>
				</thead>
				${trafo.map(data => `<tbody>
					<tr>
                        <td>${data.title}</td>
                        <td id="${data.id}">${data.value}</td>
                        <td>${data.unit}</td>
					</tr>
				</tbody>`).join('')}
			</table>
			<table>
				<thead>
					<tr>
					    <th scope="col" colspan="3">KEN</th>
					</tr>
				</thead>
				${ken.map(data => `<tbody>
					<tr>
                        <td>${data.title}</td>
                        <td id="${data.id}">${data.value}</td>
                        <td>${data.unit}</td>
					</tr>
				</tbody>`).join('')}
			</table>
            <table>
            <thead>
                <tr>
                    <th scope="col" colspan="3">GES - 1</th>
                </tr>
            </thead>
            ${ges1.map(data => `<tbody>
                <tr>
                    <td>${data.title}</td>
                    <td id="${data.id}">${data.value}</td>
                    <td>${data.unit}</td>
                </tr>
            </tbody>`).join('')}
        </table>
        <table>
            <thead>
                <tr>
                    <th scope="col" colspan="3">GES - 2</th>
                </tr>
            </thead>
            ${ges2.map(data => `<tbody>
                <tr>
                    <td>${data.title}</td>
                    <td id="${data.id}">${data.value}</td>
                    <td>${data.unit}</td>
                </tr>
            </tbody>`).join('')}
        </table>
        <table>
        <thead>
            <tr>
                <th scope="col" colspan="3">KAZAN</th>
            </tr>
        </thead>
            ${kazan.map(data => `<tbody>
            <tr>
                <td>${data.title}</td>
                <td id="${data.id}">${data.value}</td>
                <td>${data.unit}</td>
            </tr>
        </tbody>`).join('')}
        </table>
      </div>
    </div>
  </div>`
})