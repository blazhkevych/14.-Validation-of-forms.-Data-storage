# 14.-Validation-of-forms.-Data-storage

Create a small website consisting of 2 pages:
* web page with registration form;
* Web page with user information.

Data storage website must use the concept
web storage.
The first web page that the user lands on is the web page with the registration form.

![image](https://github.com/blazhkevych/14.-Validation-of-forms.-Data-storage/assets/65856963/e6a57797-1cc9-48fa-85f3-94d57b8ed1b8)

After clicking on the Sign Up button, you need to check the correctness
entered data.
Mailing address:
* Obligatory field;
* only alphabetic characters, period, hyphen, underscore;
* Mandatory presence of @ symbol and domain after @;
* There must be at least 3 other characters before the @ symbol.

Password:
* Obligatory field;
* minimum 6 characters;
* must be present: 1 lowercase letter, 1 uppercase letter and 1 number.

Password confirmation:
* Obligatory field;
* must match the data in the previous field. If the data
entered incorrectly, it is necessary to display errors to the user.

![image](https://github.com/blazhkevych/14.-Validation-of-forms.-Data-storage/assets/65856963/ea531f90-f596-4f19-b85a-60fbdc304abc)

If the user enters all the data correctly, then it is necessary
save them to Local storage and redirect it to the next web page.

![image](https://github.com/blazhkevych/14.-Validation-of-forms.-Data-storage/assets/65856963/6f8d4148-c569-4f47-ac85-c273475eadb8)

When a user enters the registration web page,
check if user data is present in Local storage. If
are present, then immediately redirect it to the next web page.
The following web page is a web page with more detailed
user information.

![image](https://github.com/blazhkevych/14.-Validation-of-forms.-Data-storage/assets/65856963/88ff93da-f5a2-4969-b6d7-b566d2504099)

This webpage should have an Exit button and a form to enter
user data.
By clicking on the Exit button, data from Local storage is deleted, and
the user is redirected to the registration web page.
When you click on the Save button, you need to check the correctness
entered data.
Name:
* Obligatory field;
* Max: 20 symbols;
* only alphabetic characters.

Surname:
* Obligatory field;
* Max: 20 symbols;
* only alphabetic characters.

Year of birth:
* Obligatory field;
* range from 1900 to current.

Floor:
* Obligatory field;
* dropdown list with two options.

Phone number:
* optional field;
* possible numbers, space, parentheses, hyphen;
* The line must contain from 10 to 12 digits.

Skype:
* optional field;
* any number of characters: letters, numbers, hyphen, dot.

If the data is entered incorrectly, then it is necessary to display errors (as
on the registration form). If the data is entered correctly, then
store them in Local storage.
When a user visits a web page with detailed
information, it is necessary to check whether this data is present in the Local
storage.

If the data is present in Localstorage, then display it on the form. If
are not present, then leave the form blank.
If the user visits a web page with detailed information,
and in Local storage there is no information at all, it is necessary
redirect it to the registration web page.

