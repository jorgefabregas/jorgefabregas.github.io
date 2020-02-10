const express = require("express"); 
const exphbs = require('express-handlebars'); 
const path = require('path');

const app = express(); 

app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
})); 
app.set('view engine', 'handlebars'); 

app.get("/",(req,res)=>{ 
    res.render("index",{ 
        title: "Home Page", 
        description: "Welcome to Joy BB" 
    }) 
});

app.get("/about",(req,res)=>{ 
    res.render("about",{ 
        title: "About Us", 
        description: "About to Joy BB" 
    }) 
});

app.get("/login",(req,res)=>{ 
    res.render("login",{ 
        title: "Log In ", 
        description: "Join to Joy BB" 
    }) 
});

app.post('/login', (req, res) => {
    
})


app.get("/register",(req,res)=>{ 
    res.render("register",{ 
        title: "Log In ", 
        description: "Register" 
    }) 
});

app.post('/register', async (req, res) => {
    try {
        const harshedPassword = bcrypt.hash(req.body.password, 5);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: harshedPassword  
    })
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
})

const PORT=7000; 
app.listen(PORT,()=>{ 
    console.log(`Web server is up and running.`) 
});