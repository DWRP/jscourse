const code = () => {
    var arr = ["Apple", "Banana", "Orange",["Tomato"]]
    var apple = arr[0];
    var banana = arr[1];
    var orange = arr[2];
    var tomato = arr[3][0];

    console.log(apple);
    console.log(banana);
    console.log(orange);
    console.log(tomato);

    var [apple,banana,orange,[tomato]] = [
        "Apple", 
        "Banana", 
        "Orange",
        ["Tomato"]
    ];
    
    console.log('\n');

    console.log(apple);
    console.log(banana);
    console.log(orange);
    console.log(tomato);

    console.log('\n');

    var obj = {
        name: "Celso"
    }

    var name = obj.name;

    console.log(name);
    
    var {name} = obj;

    console.log(name);

    var {name:newName} = obj;

    console.log(newName);
    

    console.log('\n');


    var obj = {
        name: "Celso",
        props:{
            age: 26
        }
    }
    
    var {props:{age}} = obj;
    console.log(age);

    var {age} = obj.props;
    console.log(age);
    
    var {props:{age:age2}} = obj;
    console.log(age2);

    console.log();
    var obj = {
        name: "Celso",
        props:{
            age: 26,
            colors:['black','blue','white']
        
        },       
    }

    var color = obj.props.colors;
    console.log(color);

    var {colors:color2} = obj.props;
    console.log(color2);
    
    var {props:{colors:color3}} = obj;
    console.log(color3);
    
    console.log();


    


    return "";
};


module.exports = code();