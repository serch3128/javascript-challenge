

let input =d3.select("#date-text");
let output = d3.select(".output");
let tbody= d3.select("tbody");

function handleChange(event){
    
    let inputDate=d3.event.target.value;

    function selectDate(ob){
        return ob.datetime === inputDate;
    }

    let selectedData = data.filter(selectDate);

    tbody.text("")

    selectedData.forEach(d=>{
        let row = tbody.append("tr");
        Object.values(d).forEach(w=>{
            let cell = row.append("td");
            cell.text(w)
        }) 
    })

    console.log(selectedData);

    output.text("");

    output.text(inputDate);


}






input.on("change",handleChange);








