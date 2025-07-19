
function calculate() {
  const dose = parseFloat(document.getElementById("dose").value);
  if (isNaN(dose) || dose <= 0) return;
  const daily = dose / 7;
  let html = "<h3>ขนาดยารายวัน</h3><div>";
  let total3 = 0, total5 = 0;

  for (let i = 0; i < 7; i++) {
    let d = Math.round(daily * 100) / 100;
    let num5 = Math.floor(d / 5);
    let rem = d - num5 * 5;
    let num3 = Math.floor(rem / 3);
    rem = rem - num3 * 3;

    let useHalf = false;
    if (rem >= 1.5) {
      if (Math.abs(rem - 5) <= 1.5) { num5 += 1; }
      else if (Math.abs(rem - 3) <= 1.5) { num3 += 1; }
      else { useHalf = true; }
    } else if (rem >= 1) {
      useHalf = true;
    }

    html += "<div>";
    for (let j = 0; j < num3; j++) html += "<span class='circle w3'></span>";
    for (let j = 0; j < num5; j++) html += "<span class='circle w5'></span>";
    if (useHalf) {
      if (rem <= 2) html += "<span class='circle w3half'></span>";
      else html += "<span class='circle w5half'></span>";
    }
    html += "</div>";
    total3 += num3 + (useHalf && rem <= 2 ? 0.5 : 0);
    total5 += num5 + (useHalf && rem > 2 ? 0.5 : 0);
  }

  html += `<h3>รวมยาที่ต้องจ่าย</h3><p>💊 3mg ${total3} เม็ด</p><p>💊 5mg ${total5} เม็ด</p>`;
  document.getElementById("results").innerHTML = html;
}
