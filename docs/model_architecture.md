# Model Architecture
Quote
- id - pk
- quote_number - unique
- first_name
- last_name
- company_name - optional
- phone_number
- email address
- preferred_contact_method
- nsn
- part_number
- quantity
- condition
- priority

Comment
- id - autogen pk
- title
- message



## App: Catalog
Federal Supply Group
- id - pk
- description

Federal Supply Classification
- id - pk
- description

Demilitarization
- code
- description
- pmic
- hmic
- nsn

Requirement
- id
- nsn
- mrc
- requirement_statement
- reply

Product
- nsn - pk
- name
- fsc (foreign key to Federal Supply Classification)
- fsg (Federal Supply Group)



Line Item


