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
- Table == Relation ~= Entity
- Row == Record == Tuple
- Column == Field == Attribute

### Primary Key
- The unique identifier for a particular record within a table (`UNIQUE`)
- Can never be null (`NOT NULL`)
- The usual data type is auto-incrementing integer (preferably `BIGINT`, so use `BIGSERIAL`)
- A Primary Key stored in another table is known as a `Foreign Key` (they **MUST** be of the same data type)
- Automatically indexed, BUT indexes are not free (INSERT/UPDATE needs to update them all)

#### Naming Conventions (at LHL)
- Table and column names in `snake_case`
- Table names are pluralized, e.g. `books, authors, books_authors`
- Primary key is `id`
- A foreign key is made up of the singular of the primary key's table and the suffix `_id` (eg. `user_id` is the foreign key for the `id` field in the `users` table)

### Data Types
- Each field in a table **must** have a [data type](http://www.postgresqltutorial.com/postgresql-data-types/))
- Disclaimer: Start out simple. Choosing the perfect data type is less of a concern nowadays (sensible framework defaults, cheap memory, time-to-market, decision fatigue, changing requirements)
- The data type tells the database how much room to set aside for the value, so prefer the smallest sensible data type for a column (e.g. fixed `VARCHAR` vs arbitrary `TEXT`, `INTEGER` vs `BIGINT`)
- The data type allows the database to perform type validation on data before insertion (data integrity)


### Entity Relationship Types
- **One-to-One**: One record in the first table is related to one (and only one) record in the second table
- **One-to-Many**: One record in the first table is related to zero/one or more records in the second table.
  - If one album has many songs AND a song can only belong to an album, `songs` records keep a `album_id` field.
- **Many-to-Many**: One or more records in the first table are related to zero/one or more records in the second table (through many records on the join table)
  - If one album has many songs AND a song can be in many albums: see `music.sql` for an example with a **join table**
- One-to-One's are rare (though conceptually useful), and Many-to-Many can be thought of as two-way One-to-Many's (only conceptually)

### Entity Relationship Diagram (ERD)

- A visual depiction of the database tables and their relationships
- Extremely useful for reasoning about database structure
- [diagrams.net](https://app.diagrams.net/) or [dbdiagram.io](https://dbdiagram.io/)

### Some Good Ideas
- Use sensible default values, e.g. `created_at`/`updated_at = NOW()`, `active = true`
- Default to require a field (`NOT NULL`), easy to make it optional later
- Consider delete strategies (soft vs. hard delete). Soft deletion uses a flag `deleted` or `deleted_at` instead of actually deleting records
- Deliberate on the nature of relationship of entities (recall our thought process to model `songs` and `albums` as a many-to-many relationships)
- Research the appropriate data type for business-critical entities (e.g. [PostgreSQL has a money type that is **not** recommended for money types](https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_money)). Real-world entities are rarely simple (see common [falsehoods](https://github.com/kdeldycke/awesome-falsehood))
- Consider pulling repeated values out, either (1) to their own table and make reference to them with a foreign key, or (2) with [ENUMs](https://www.postgresql.org/docs/current/datatype-enum.html)

### Useful Links
* [Postgres Data Types](http://www.postgresqltutorial.com/postgresql-data-types/)
* 2-part Videos On More Examples of Entity Relationships and ERD: [Part 1](https://www.youtube.com/watch?v=QpdhBUYk7Kk) [Part 2](https://www.youtube.com/watch?v=-CuY5ADwn24)
* [ERD Cheatsheet](https://www.vivekmchawla.com/)
* [diagrams.net](https://app.diagrams.net/)
* [dbdiagram.io](https://dbdiagram.io/)
* [Common Falsehoods About Real-World Entities](https://github.com/kdeldycke/awesome-falsehood)
