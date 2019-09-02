.App{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #2C3E50
    /*#A8ADB4*/
}
.Loader{
	min-height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	bottom: 0;
	
	
}
.Hidden{
	display: hidden;
}
.Header{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    min-height: 70vh;
    min-width: 100%;
    background-image: linear-gradient(to right, #36d1dc, #5b86e5);;
    
}

.Name{
    color: whitesmoke;
    margin-top: 5rem;
    font-size: 2rem;
    text-align: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;

}
.Desc{
    font-size: 1rem;
    text-align: center;
    font-family: Assistant, sans-serif;
    font-weight: lighter;
}
.Weight{
    font-weight: 700;
}

.Images{
    flex-direction: row;
    margin-top: 0.3em;
}

.Images *{
    margin-left: 1em
}

.ProjTitle{
    margin-top: 1.5em;
    font-size: 2rem;
    color: whitesmoke;
    font-family: Roboto, sans-serif;
    

}
.ProjDesc{
    padding: 0.5em; 
    font-size: 1rem;
    line-height: 1.3em;
    font-family: Assistant, sans-serif;
    font-weight: lighter;
}
.Reference::before{
    content: "\A";
    white-space: pre;
}
.ProjName{
    align-self: center; 
    padding-top: 0.5em;
    font-size: 2rem;
    text-align: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;
}
.Portfolio{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: #2C3E50;
    /*#A8ADB4*/
    overflow: hidden;
}

.Project{
    margin-top: 8em;
    min-height: 25vh;
    min-width: 40vw;
    background-color: #EAEDED;
    overflow: hidden;
}

.border0{
    border-style: solid;
    border-width: 2em;
    border-color : #566573
    /*lightgrey;*/
}

.border1{
    border-style: solid;
    border-width: 2em;
    border-color: #566573;
}

.border2{
    border-style: solid;
    border-width: 2em;
    border-color: #566573;
}
.border3{
    border-style: solid;
    border-width: 2em;
    border-color: #566573;
}

.Footer{
    margin-top: 1em;
    background: linear-gradient(to right, #36d1dc, #5b86e5);;
    font-family: Assistant, sans-serif;
}

.movie-background{
	height: 20em;
	background-image: url("./images/moviewebapp.PNG");
	background-size: cover;
	background-position: center
}

.deck-background{
	height: 20em;
	background-image: url("./images/deck1.PNG");
	background-size: cover;
	background-position: center
}

.iot-background{
	height: 20em;
	background-image: url("./images/website.PNG");
	background-size: cover;
	background-position: left
}

.api-background{
	height: 20em;
	background-image: url("./images/gameapi.PNG");
	background-size: cover;
	background-position: center
}

.button-style{
    font-family: Assistant; 
    align-self:center; 
    width: 10em; 
    margin-bottom:1em
}

@media (min-width: 768px) {
    .Name{
        color: whitesmoke;
        margin-top: 5rem;
        font-size: 3.5rem;
    }    
    .Desc{
        font-size: 1.5rem;
        text-align: center;
    }

    .ProjTitle{
        margin-top: 1.5em;
        font-size: 3.5rem;
        color: whitesmoke;
    }
    .ProjDesc{
        padding: 0.5em; 
        font-size: 2rem
    }

    .ProjName{
        align-self: center; 
        padding-top: 0.5em;
        font-size: 3rem;
    }

	.movie-background{
		background-image: url("./images/moviewebapp.PNG");
		background-size: cover;
		background-position: center;
		height: auto;
	}

	.deck-background{
		background-image: url("./images/deck1.PNG");
		background-size: cover;
		background-position: center;
		height: auto;
	}

	.iot-background{
		background-image: url("./images/website.PNG");
		background-size: cover;
		background-position: left;
		height: auto;
	}

	.api-background{
		background-image: url("./images/gameapi.PNG");
		background-size: cover;
		background-position: center;
		height: auto;
	}	

}
