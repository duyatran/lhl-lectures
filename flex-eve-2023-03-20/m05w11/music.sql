-- Assumptions:
--   - One album may contain many songs
--   - One song may belong to many albums

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY, -- BIGSERIAL for production apps, SERIAL is fine for small projects
  name TEXT NOT NULL, -- NOT NULL for required fields
  release_date DATE, -- Choose appropriate data type for each field
  -- What if many songs belong to the same genre? What are the pros/cons of maintaining genres table, and albums keep a genre_id FK?
  -- How would you change your design if an album may have multiple genres
  genre VARCHAR(50),

  -- FKs
  artist_id INT REFERENCES artists(id), -- an alternative to storing artist_name when requirements grow

  -- Auditing
  created_at TIMESTAMP DEFAULT NOW(), -- Give default values if possible
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  track_number SMALLINT,
  song_name VARCHAR(500),
  rating FLOAT,
  run_time INTERVAL,
);

CREATE TABLE albums_songs (
  song_id INT REFERENCES albums(id),
  album_id INT REFERENCES albums(id),
)
