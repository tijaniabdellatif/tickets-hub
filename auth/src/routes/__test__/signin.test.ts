import request from "supertest";
import { app } from "../../app";

// describe('/api/users/signin route', () => {

//     it("return 500 when signin a user",async () => {

//         await request(app)
//         .post('/api/users/signin')
//         .send({
    
//             email:"tijani.idrissi.abdellatif@gmail.com",
//             fullname:"abdellatif tijani",
//             password:"abdellatif@@23DrDeco",
//             username:"kratos"
    
    
//         }).expect(function (res) {
            
//             console.log(
//             res.text
//               );
            
//           }).expect(500);
//     });


//    it('return 422 if an input is not valid',async () =>{

//       await request(app)
//       .post('/api/users/signin')
//       .send({
//         email:"tijani.idrissi.abdellatif@gmail.com",
//         fullname:"abdellatif tijani",
//         password:"abdellatif@@23Deco",
//         username:"kratos"
          
//       }).expect(function(res) {

//         console.log(JSON.parse(res.text))

//       }).expect(422)
//    })

//    it('return 422 if an input is empty',async () =>{

//     await request(app)
//     .post('/api/users/signin')
//     .send({
//       email:"",
//       fullname:"abdellatif tijani",
//       password:"abdellatif@@23Deco",
//       username:"kratos"
        
//     }).expect(function(res) {

//       console.log(JSON.parse(res.text))

//     }).expect(422)
//    })

//    it('return 422 if all inputs are empty',async () =>{

//     await request(app)
//     .post('/api/users/signin')
//     .send({
//       email:"",
//       fullname:"",
//       password:"",
//       username:""
        
//     }).expect(function(res) {

//       console.log(JSON.parse(res.text))

//     }).expect(422)
//    })

  
   
// });


it('send a token when success',async()=>{

    const response = await request(app).post('/api/users/signin')
    .send({
        email:"tijani.idrissi.abdellatif@gmail.com",
        fullname:"abdellatif tijani",
        password:"abdellatif@@23DrDeco",
        username:"kratos"    
    }).expect(500)

    expect(response.get('Set-Cookie'));
})


test.concurrent('')



