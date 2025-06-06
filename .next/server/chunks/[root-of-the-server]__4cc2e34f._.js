module.exports = {

"[project]/.next-internal/server/app/todos/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}}),
"[project]/todos.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"58b3db1e-aaff-4f21-a24e-f5febcf9165a\",\"text\":\"Master Node.js\",\"completed\":true},{\"id\":\"e37fa2db-2d0f-42ce-882d-8c66eb42ecf5\",\"text\":\"Learn\",\"completed\":false}]"));}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/lib/database.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "connectDb": (()=>connectDb)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const DB_URL = 'mongodb://localhost:27017/todo';
const connectDb = async ()=>{
    try {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState === 1) {
            console.log("Already connected!");
            return;
        }
        // await mongoose.connection(DB_URL,{
        //     dbName:"todoApp"
        // })
        console.log("readystate are connected", __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(DB_URL);
        console.log("Datat base are connected");
        console.log("readystate are connected", __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState);
    } catch (err) {
        console.log(err);
        console.log("Database are not connected");
        process.exit(1);
    }
};
}}),
"[project]/model/todoModel.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const Todo = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Todo || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Todo', {
    text: {
        type: string,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
});
const __TURBOPACK__default__export__ = Todo;
}}),
"[project]/app/todos/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$todos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/todos.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/database.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$todoModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/model/todoModel.js [app-route] (ecmascript)");
;
;
;
;
;
async function GET() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDb"])();
    // const result=await db.collection("users").insertOne({name:"Ram"});
    // console.log(result);
    // console.log("object");
    // const result =await mongoose.connection.db.collection("users").insertMany({title:"learn next js "})
    // console.log(result);
    // const newTodo=await Todo.create({
    //   text:"Learn javascript",
    // })
    // console.log(newTodo);
    // console.log("object");
    // // const result=await Todo.find();
    // // console.log(result);
    const newTodo1 = await __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$todoModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find();
    // console.log(newTodo);
    console.log(newTodo1.map(id));
    // return Response.json(newTodo);
    return Response.json(({ id: id1, text, completed })=>({
            id: id1,
            text,
            completed
        }));
    "TURBOPACK unreachable";
    const todoJSONString = undefined;
    const todos = undefined;
}
async function POST(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDb"])();
    const todo = await request.json();
    // const newTodo = {
    //   id: crypto.randomUUID(),
    //   text: todo.text,
    //   completed: false,
    // };
    const { id: id1, text, completed } = await __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$todoModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        text: todo.text
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$todos$2e$json__$28$json$29$__["default"].push(newTodo);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])("todos.json", JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$todos$2e$json__$28$json$29$__["default"], null, 2));
    // return Response.json(newTodo, {
    //   status: 201,
    // });
    return Response.json(id1, text, completed, {
        status: 201
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4cc2e34f._.js.map