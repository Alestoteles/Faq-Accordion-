* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

}

html, body { 
    height: 100%;
}


li { 
    cursor: pointer;
    padding: 0.5vw;
    width: 16vw;
    border-bottom:  1px solid  hsl(240, 5%, 91%);
}

h1, li  { 
    margin-bottom: 0.5vw;
}

h1 , p {
    font-size: 0.75vw;
}

.box-card { 
    background-image: linear-gradient( to bottom, hsl(273, 75%, 66%), hsl(240, 73%, 65%)) ;
    background-repeat: no-repeat;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 0 auto;
}

.card { 
    display: flex;
    background-color: white;
    max-width: 1440px;
    width: 35vw;
    border-radius: 1.3rem;

}



.cube-desktop { 
    position: relative;
    right: 12vw;
    top: 1vw;
    width: 8vw;

}

.images-desktop { 
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 15vw;
    background-image: url(/images/bg-pattern-desktop.svg) , url(/images/illustration-woman-online-desktop.svg);
    background-repeat: no-repeat;
    background-size: 37vw , 17vw;
    background-position-y: -12vw , 2vw;
    background-position-x: -23vw , -3vw;

}

.faq { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vw 1vw 2vw 1vw;
}


.questions::after { 
    content: "⤵";
    background-position-x: 1vw;
    background-position-y: 0.4vw;

}

.answers {
    display: none;
}



.active { 
    font-size: 0.6vw;
    display: block;
    padding-top: 1rem;
}

.questions-active ::after { 
    content: "⤴ ";

}





rem


* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

}

html, body { 
    height: 100%;
}


li { 
    cursor: pointer;
    padding: 0.5rem;
    width: 16rem;
    border-bottom:  1px solid  hsl(240, 5%, 91%);
}

h1, li  { 
    margin-bottom: 0.5rem;
}

h1 , p {
    font-size: 0.75rem;
}

.box-card { 
    background-image: linear-gradient( to bottom, hsl(273, 75%, 66%), hsl(240, 73%, 65%)) ;
    background-repeat: no-repeat;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 0 auto;
}

.card { 
    display: flex;
    background-color: white;
    max-width: 1440px;
    width: 35rem;
    border-radius: 1.3rem;

}



.cube-desktop { 
    position: relative;
    right: 12rem;
    top: 1rem;
    width: 8rem;

}

.images-desktop { 
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 15rem;
    background-image: url(/images/bg-pattern-desktop.svg) , url(/images/illustration-woman-online-desktop.svg);
    background-repeat: no-repeat;
    background-size: 37rem , 17rem;
    background-position-y: -12rem , 2rem;
    background-position-x: -23rem , -3rem;

}

.faq { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem 2rem 1rem;
}


.questions::after { 
    content: "⤵";
    background-position-x: 1rem;
    background-position-y: 0.4rem;

}

.answers {
    display: none;
}



.active { 
    font-size: 0.6rem;
    display: block;
    padding-top: 1rem;
}

.questions-active ::after { 
    content: "⤴ ";

}
