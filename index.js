var cy = cytoscape({

    container: document.getElementById('cy'), // container to render in
    
    layout: {
      name: 'grid',
      rows: 1,
      zoom:1,
    },
    
    style: [
       {
        selector: 'node',
        style: {
        // 'background-color': '#fff',
        "background-fill": 'linear-gradient',
        "background-gradient-stop-colors":'#ced4da #adb5bd #dee2e6',
      // "  background-gradient-stop-positions": '  ,
        // 'shape': 'circle',
        'label':"data(id)",
        "width":"50px",
        "height":"50px",
        "z-index":2,
        "color":"transparent",
        "text-opacity":0
       }
    },
    {
        selector: 'edge',
        style: {
        'background-color': '#0c8599',
        // 'shape': 'circle',
        // 'label':"data(id)"
       }
    },
    ]
    });
    
    cy.layout({
        name: 'circle'
    }).run();

    
    
    
let oneBouncePos=1
document.querySelector(".one-bounce").addEventListener("click",()=>{
        let yPos=Math.floor(Math.random() * (1 - 1) + 1)
        const node=cy.add({ group: 'nodes', data: { id: oneBouncePos+1 }, position: { x: oneBouncePos*100, y:yPos*200 }, locked: true });
        oneBounceOutside(cy.$(`#${node.id()}`))
        const {x,y}=node.position();
        rippleEffect(x,y,node)
        oneBouncePos++
})

let twoBouncePos=1
document.querySelector(".two-bounce").addEventListener("click",()=>{
        const node=cy.add({ group: 'nodes', data: { id: twoBouncePos+1+"onebounce" }, position: { x: twoBouncePos*100, y:350 }, locked: true });
        twoBounceOutside(cy.$(`#${node.id()}`))
        const {x,y}=node.position();
        rippleEffect(x,y,node)
        twoBouncePos++
})

let oneBouncePosInside=1

document.querySelector(".one-bounce-inside").addEventListener("click",()=>{
    const node=cy.add({ group: 'nodes', data: { id: oneBouncePosInside+1+"onebounceinside" }, position: { x: oneBouncePosInside*100, y:600 }, locked: true,style:{"width":"50px","height":"50px"} });
    oneBounceInside(cy.$(`#${node.id()}`))
    const {x,y}=node.position();
    rippleEffect(x,y,node)
    oneBouncePosInside++
})

let twoBouncePosInside=1
document.querySelector(".two-bounce-inside").addEventListener("click",()=>{
        const node=cy.add({ group: 'nodes', data: { id: twoBouncePosInside+1+"twobounceinside" }, position: { x: twoBouncePosInside*100, y:750 }, locked: true,style:{"width":"50px","height":"50px"} });
        twoBounceInside(cy.$(`#${node.id()}`))
        const {x,y}=node.position();
        rippleEffect(x,y,node)
        twoBouncePosInside++
})






function oneBounceOutside(node){
    node.animate({              
        "style": {  
            "width":"53px","height":"53px"
            },
        "duration":150,
        "easing": 'ease-in',
        queue: true
    
    }).style({"width":"53px","height":"53px"}).animate({
        "style": { 
            "width":"47px" ,"height":"47px"
            },
        "duration":100,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"47px","height":"47px"}).animate({
        "style": { 
            "width":"50px","height":"50px"
            },
        "duration":150,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"50px","height":"50px"})
}

function twoBounceOutside(node){
    node.animate({              
        "style": {  
            "width":"53px","height":"53px"
            },
        "duration":150,
        "easing": 'ease-in',
        queue: true
    
    }).style({"width":"53px","height":"53px"}).animate({
        "style": { 
            "width":"47px" ,"height":"47px"
            },
        "duration":100,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"47px","height":"47px"}).animate({
        "style": { 
            "width":"53px","height":"53px"
            },
        "duration":150,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"53px","height":"53px"})
    .animate({
        "style": { 
            "width":"50px","height":"50px"
            },
        "duration":120,
        "easing": 'ease-in',
        queue: true
    
    }).style({"width":"50px","height":"50px"})
}


function oneBounceInside(node){
    node.animate({              
        "style": {  
            "width":"47px","height":"47px"
            },
        "duration":150,
        "easing": 'ease-in',
        queue: true
    
    }).style({"width":"47px","height":"47px"}).animate({
        "style": { 
            "width":"53px" ,"height":"53px"
            },
        "duration":100,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"53px","height":"53px"}).animate({
        "style": { 
            "width":"50px","height":"50px"
            },
        "duration":150,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"50px","height":"50px"})
    // .animate({
    //     "style": { 
    //         "width":"50px","height":"50px"
    //         },
    //     "duration":120,
    //     "easing": 'ease-in',
    //     queue: true
    
    // }).style({"width":"50px","height":"50px"})
}


function twoBounceInside(node){
    node.animate({              
        "style": {  
            "width":"47px","height":"47px"
            },
        "duration":150,
        "easing": 'ease-in',
        queue: true
    
    }).style({"width":"47px","height":"47px"}).animate({
        "style": { 
            "width":"53px" ,"height":"53px"
            },
        "duration":100,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"53px","height":"53px"}).animate({
        "style": { 
            "width":"47px","height":"47px"
            },
        "duration":150,
        "easing": 'ease-out',
        queue: true
    
    }).style({"width":"47px","height":"47px"})
    .animate({
        "style": { 
            "width":"50px","height":"50px"
            },
        "duration":120,
        "easing": 'ease-in',
        queue: true
    
    }).style({"width":"50px","height":"50px"})
}


function rippleEffect(x,y,node){
    const shadowNode=cy.add({
        group: 'nodes',
        data: { weight: 75},
        position: { x, y },
        style:{
            "background-fill": 'linear-gradient',
            "background-gradient-stop-colors":'#ced4da #dee2e6',
            "opacity":.5,
            "text-opacity":0,
            "width":"50px",
            "height":"50px",
            "z-index":1
          }
       }).animate({
            "style":{"width":"80px","height":"80px","opacity":.0,},
             duration:800})
          .style({"width":"80px","height":"80px","opacity":0})

setTimeout(()=>{
    cy.remove(shadowNode)
    node.unlock()
},800)
}