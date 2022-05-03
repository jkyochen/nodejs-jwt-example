const jwt = require("jsonwebtoken");
const JWTSecret = "$$jwt$$";

let jwtToken = jwt.sign({
    userId: 1,
    userName: "foo",
}, JWTSecret);

console.log("jwtToken", jwtToken);

let decoded = jwt.verify(jwtToken, JWTSecret);
console.log("decoded", decoded.userId, decoded.userName);


// jwt token expire

let jwtToken1 = jwt.sign({
    userId: 1,
    userName: "foo",
}, JWTSecret, {
    expiresIn: "-1h",
});

try {
    jwt.verify(jwtToken1, JWTSecret);
} catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
        console.log("error", e);
    }
}
