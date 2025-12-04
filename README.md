# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

 enum হল একটা type যাকে আমরা value হিসেবে ব্যবহার করতে পারি. এটি মূলত এক গুচ্ছ string literal  কে এক জায়গায় রাখে.

উদাহরণ হিসেবে, আমরা যদি string literal কে type হিসেবে ব্যবহার করি যেমন

type Roles = “Admin” | ”Manager” | ”Employee”

তাহলে আমরা এটিকে ফাংশনের মধ্যে শুধু টাইপ হিসেবেই ব্যবহার করতে পারব, যেমন-

const functionName =(role: Roles)⇒{....

কিন্তু এটিকে আমরা value হিসেবে use করতে পারবো না. এর ফলে যদি আমরা ফাংশনের মধ্যে condition use করি তাহলে ভুল হওয়ার সম্ভাবনা থাকে, যেমন-

const functionName =(role:Roles)⇒{

if(role===”Addmin”){…..

যদি আমরা enum use করি তাহলে এ ধরনের ভুল হওয়ার সম্ভাবনা অনেকটাই কমে যায়. কারণ enum একই সাথে type এবং value হিসেবে ব্যবহার করা যায়.

enum Roles {

Admin = “Admin”,

Manager = ”Manager”,

Employee = ”Employee”

}

এখন যদি আমরা এটিকে ফাংশন এবং কন্ডিশন এর মধ্যে ব্যবহার করি তাহলে, ভুল হওয়ার সম্ভাবনা অনেকটাই কমে যায় যেমন

const functionName =(role:Roles)⇒{

if(role===Roles.Admin){....

বি:দ্র:- enum file এর বান্ডেল সাইজ অনেক বড় করে দেয় তাই এদিকে বেশি ব্যবহার করা উচিত নয়


## example of a numeric and string enum

### string enum-

enum Roles {

Admin = “Admin”,

Manager= ”Manager”,

Employee= ”Employee”

}

### numeric enum-

enum Position{

first,

second,

third

}

numeric এনাম অটোমেটিক্যালি ভ্যালুগুলোকে নাম্বারে রূপান্তরিত করে, যেমন-

first = 0, second = 1, third = 2




# Provide an example of using union and intersection types in TypeScript.

## Union type

এটি মূলত "অথবা" অর্থের ব্যবহৃত হয়. অর্থাৎ একটি টাইপের মধ্যে থাকা অনেকগুলো value এর মধ্যে যদি শুধু একটি value ব্যাবহারে ফাংশনটি কাজ করে তখন তাকে Union type বলে, যেমন-
type Role = 'Admin' | 'Manager' | 'Employee'

const functionName = (role:Role) => {...}

এখনো এই ফাংশনের মধ্যে আমরা যেকোনো একটি (Admin, Manager কিংবা Emoloyee) ব্যবহার করতে পারব

## Intersection type

এটি মূলত অনেকগুলো টাইপের সমন্বয় কে বোঝানো হয় যেখানে সবগুলো টাইপের উপস্থিতি অবশ্যই, যেমন-

type Email = string
type Phone = number

type Contact = Email & Phone

const functionName = (info:Contact)=>{....}

এখন এই ফাংশনের মধ্যে Email এবং Phone উভয় উপস্থিত থাকতে হবে