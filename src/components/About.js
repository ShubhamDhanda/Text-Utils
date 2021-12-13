import React,{useState} from 'react'

export default function About() {
    const [mystyle,setMystyle]=useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid black'
    })
    const[btnTxt,setBtnTxt]=useState("Enable Dark Mode");
    const toggleStyle= ()=>{
        console.log("onclick");
        if(mystyle.color==="black"){
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid white'
            })
            setBtnTxt("Enable Light Mode")
        }
        else{
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid black'
            })
            setBtnTxt("Enable Dark Mode")
        }
    }
    const handleClick = (event) => {
        var b=event.target.className;
        var c=b.substr(0,5);
        var d=c+"b";
        var cl=document.getElementsByClassName(d);
        if(cl[0].style.display==="none"){
            console.log(1);
            cl[0].style.display="block";
            document.getElementsByClassName(b)[0].innerHTML="Less";
        }
        else{
            console.log(2);
            cl[0].style.display="none";
            document.getElementsByClassName(b)[0].innerHTML="More";
        }
    }
    return (
        <>
        <div className="container px-2 py-2" >
            <div className="temp1 temp" style={mystyle}>
                <div className="temp1a temp-1">
                    <div className="temp1a1">Accordinan Item1</div>
                    <div className="temp1a2" onClick={handleClick}>More</div>
                </div>
                <div className="temp1b temp-2" style={{display:'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro, enim modi tenetur quibusdam delectus consequuntur dolorem accusamus, numquam a voluptates accusantium aspernatur repellendus debitis. Reiciendis, adipisci? Blanditiis, assumenda corporis! Praesentium, quisquam. Libero omnis non cum inventore quam ad commodi?</div>
            </div>
            <div className="temp2 temp" style={mystyle}>
                <div className="temp2a temp-1">
                    <div className="temp2a1">Accordinan Item1</div>
                    <div className="temp2a2" onClick={handleClick}>More</div>
                </div>
                <div className="temp2b temp-2" style={{display:'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum dolorem eligendi sint similique. Quasi, voluptatibus repellendus aspernatur qui obcaecati beatae aliquam quibusdam nisi aliquid quas, voluptas iste doloribus earum? At delectus non amet itaque. Quae illum error magni beatae est aut, id corporis, rerum incidunt consectetur non, blanditiis labore.</div>
            </div>
            <div className="temp3 temp" style={mystyle}>
                <div className="temp3a temp-1">
                    <div className="temp3a1">Accordinan Item1</div>
                    <div className="temp3a2" onClick={handleClick} >More</div>
                </div>
                <div className="temp3b temp-2" style={{display:'none'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam atque est esse molestias unde quo quasi assumenda non possimus? Harum error totam maxime aperiam quia repudiandae obcaecati cum repellat? Doloremque qui omnis, accusamus aliquam illo eligendi enim autem numquam, perspiciatis provident rem quo fugiat sit a ut et temporibus voluptatibus. Nulla, quod ratione deleniti illum blanditiis cupiditate voluptatem in recusandae delectus! Voluptatum quas totam provident culpa qui at blanditiis eos.</div>
            </div>
        </div>
        <div className="container my-2">
            <button className="btn btn-primary mx-1" onClick={toggleStyle}>
                {btnTxt}
            </button>

        </div>
        </>
    )
}
