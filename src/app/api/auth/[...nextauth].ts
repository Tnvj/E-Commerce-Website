// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           return null; 
//         }

//         const res = await fetch('https://fakestoreapi.com/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             username: credentials.username,
//             password: credentials.password
//           })
//         });

//         const data = await res.json();

//         if (res.ok && data.token) {
//           // Save the token to the session
//           console.log(data.username,data.password);
//          // return { ...data.user, token: data.token };
       
//         } else {
//           console.log("kye hai ye");

//         }
//         return null;
//       }
//     })
//   ]
// });
