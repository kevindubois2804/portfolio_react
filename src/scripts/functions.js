export function AppearFromTopChildrenElementsAnimation (parentElement) {
    
    if (window.innerWidth<700) {
        
        let children = parentElement.children;
        console.log(children)
        let delay = 0;
        for(let i=0; i<children.length ; i++){
            let child = children[i];

            child.animate([{
                transform: "translateY(-1000px)",
                width: "0"
            }, {
                transform: "translateY(0)",
                width: "100%"
            }], {
                // sync options
                fill: "forwards",
                easing: "ease-in-out",
                iterations: 1,
                duration: 1000,
                delay: delay
                
            });
            

            delay = delay + 1000;
        }
    
    }
};
