/*Creates a PieChart using CanvasJS */
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    backgroundColor: "",
    title:{
      text: "Strongest Skills",
      fontFamily: "arial black"
    },
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    theme: "theme1",
    data: [
    {        
      type: "pie",
      indexLabelFontFamily: "Garamond",       
      indexLabelFontSize: 20,
      indexLabelFontWeight: "bold",
      startAngle:0,
      indexLabelFontColor: "MistyRose",       
      indexLabelLineColor: "darkgrey", 
      indexLabelPlacement: "inside", 
      toolTipContent: "{name}",
      showInLegend: true,
      indexLabel: "#percent%",
      dataPoints: [
        {  y: 12, name: "Android Dev", legendMarkerType: "circle"},
        {  y: 15, name: "Web Dev", legendMarkerType: "circle"},
        {  y: 10, name: "Automated Scripting", legendMarkerType: "circle"},
        {  y: 15, name: "Shell Scripting", legendMarkerType: "circle"},
        {  y: 20, name: "Java", legendMarkerType: "circle"},
        {  y: 11, name: "Python", legendMarkerType: "circle"},
        {  y: 12, name: "C#", legendMarkerType: "circle"},
        {  y: 13.5, name: "C", legendMarkerType: "circle"}
      ]
    }
    ]
  });
  chart.render();
}