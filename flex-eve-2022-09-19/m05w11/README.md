# M05W11 - Database Design

### To Do
- [ ] Primary Keys/Foreign Keys
- [ ] Naming Conventions
- [ ] Data Types
- [ ] Relationship Types
- [ ] Some Design Best Practices
- [ ] Entity Relationship Diagrams
- [ ] ERD Example

### Synonyms Galore
- Table == Entity == Relation
- Row == Record == Tuple
- Column == Field == Attribute

### Primary Key

- The unique identifier for a particular record within a table (`UNIQUE`)
- Can never be null (`NOT NULL`)
- The usual data type is auto-incrementing integer (`INTEGER` or preferably `BIGINT`)
- A Primary Key stored in another table is known as a `Foreign Key`
- The Primary Key and the Foreign Key **MUST** be of the same data type

### Naming Conventions

- Table and field names are written in `snake_case`
- Table names are always pluralized, e.g. `books, authors, books_authors`
- The primary key for each table will simply be called `id`
- A foreign key is made up of the singular of the primary keys table and the suffix `_id` (eg. `user_id` is the foreign key for the `id` field in the `users` table)

### Data Types

- Each field in a table **must** have a data type defined for it
- Choose fixed-sized data types if possible (e.g. fixed `VARCHAR` vs arbitrary `TEXT`)
- Choose the smallest AND useful data type for a column
- The data type tells the database how much room to set aside to store the value
- The data type allows the database to perform type validation on data before insertion (to protect the data integrity of the table)
- Choosing the perfect data type is less of a concern nowadays (cheap memory, decision fatigue, changing requirements, efficient implementation)

### Relationship Types

- **One-to-One**: One record in the first table is related to one (and only one) record in the second table
- **One-to-Many**: One record in the first table is related to zero/one or more records in the second table
- **Many-to-Many**: One or more records in the first table are related to zero/one or more records in the second table (through many records on the join table)

- It could be argued that there is really only one relationship type: _One-to-Many_ as One-to-One's are rare (though conceptually useful), and Many-to-Many's are implemented using two _One-to-Many's_

### Some Design Best Practices

- Use sensible default values whenever possible, e.g. current timestamp for `created_at`/`updated_at`
- Default to require a field (`NOT NULL`) if possible, we can always mark it optional later
- Don't use calculated fields (a field that can be derived from other fields, e.g. `address`): `full_name` is a combination of `first_name` and `last_name`
- Hard delete vs. soft delete. Default to not delete anything (use a flag `deleted` or `deleted_at` to mark a record as deleted)
- Consider using a `type` field instead of using two (or more) tables to store very similar data (eg. create an `orders` table with an `order_type` field instead of a `purchase_orders` and a `sales_orders` table)
- Consider pulling repeated values out to their own table and make reference to them with a foreign key

### Normalization of Data
- Duplication of data has consequences
- Access patterns matter: read-only, read-mostly, write-heavy

### Entity Relationship Diagram (ERD)

- A visual depiction of the database tables and their relationships
- Extremely useful for reasoning about database structure
- [diagrams.net](https://app.diagrams.net/) or [dbdiagram.io](https://dbdiagram.io/)

### Useful Links
* [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)
* [Postgres Data Types](http://www.postgresqltutorial.com/postgresql-data-types/)
* [Relationship Types](http://etutorials.org/SQL/Database+design+for+mere+mortals/Part+II+The+Design+Process/Chapter+10.+Table+Relationships/Types+of+Relationships/)
* [diagrams.net](https://app.diagrams.net/)
* [dbdiagram.io](https://dbdiagram.io/)
* [Falsehoods Programmers believe about names with examples](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/) 
