# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

 enum হল একটা type যাকে আমরা value হিসেবে ব্যবহার করতে পারি. এটি মূলত এক হচ্ছে string literal  কে এক জায়গায় রাখে.

উদাহরণ হিসেবে আমরা যদি string literal কে type হিসেবে ব্যবহার করে যেমন

type Roles = “Admin”|”Manager”|”Employee”

তাহলে আমরা এটিকে ফাংশনের মধ্যে শুধু টাইপ হিসেবেই ব্যবহার করতে পারব, যেমন-

const functionName =(role: Roles)⇒{….

কিন্তু এটিকে আমরা value হিসেবে use করতে পারবো না. এর ফলে যদি আমরা ফাংশনের মধ্যে condition use করি তাহলে ভুল হওয়ার সম্ভাবনা থাকে, যেমন-

const functionName =(role:Roles)⇒{

if(role===”Addmin”){…..

যদি আমরা এনাম ইউজ করি তাহলে এ ধরনের ভুল হওয়ার সম্ভাবনা অনেকটাই কমে যায়. কারণ ইমাম একই সাথে টাইপ এবং ভ্যালু কিভাবে ইউজ ব্যবহার করা যায়.

enum Roles {

Admin = “Admin”,

Manager=”Manager”,

Employee=”Employee”

}

এখন যদি আমরা এটিকে ফাংশন এবং কন্ডিশন এর মধ্যে ব্যবহার করি তাহলে, ভুল হওয়ার সম্ভাবনা অনেকটাই কমে যায় যেমন

const functionName =(role:Roles)⇒{

if(role===Roles.Addmin){…..

বি:দ্র:- ইনাম ফাইটার বান্ডেল সাইজ অনেক বড় করে দেয় তাই এদিকে বেশি ব্যবহার করা উচিত নয়

**example of a numeric and string enum**

string enum-

enum Roles {

Admin = “Admin”,

Manager=”Manager”,

Employee=”Employee”

}

numeric enum-

enum Position{

first,

second,

third

}

নিউমেরিক এনাম অটোমেটিক্যালি ভ্যালুগুলোকে নাম্বারে রূপান্তরিত করে, যেমন-

first = 0, second = 1, third=2