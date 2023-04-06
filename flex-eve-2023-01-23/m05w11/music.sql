DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY, -- Maybe BIGSERIAL for production apps, SERIAL is fine for small projects though
  album_name TEXT NOT NULL, -- NOT NULL is a good default check
  artist_name TEXT CONSTRAINT namechk CHECK (char_length(artist_name) <= 255), -- CHECK contrainsts ensure data integrity at the database level
  release_date DATE, -- Choose appropriate data type for each field
  -- What if many songs belong to the same genre? What are the pros/cons of maintaining genres table, and albums keep a genre_id FK?
  -- How would you change your design if an album may have multiple genres
  genre VARCHAR(50),
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
