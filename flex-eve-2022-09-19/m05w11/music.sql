DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;

-- JOIN up to 5-6 tables


-- CREATE TABLE genres (
--   id
--   name VARCHAR(50)  'pop' => 'popular'
-- )


CREATE TABLE albums (
  id BIGINT PRIMARY KEY,
  album_name VARCHAR(70),
  artist_name VARCHAR(50), -- enough space 50-character string
  release_date DATE,
  genre VARCHAR(50), -- 'pop'
  -- genre_id INT REFERENCES genres(id)
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  track_number SMALLINT,
  song_name VARCHAR(500), -- NULLABLE
  user_rating FLOAT,
  run_time INTERVAL,
);


CREATE TABLE albums_songs (
  album_id INT REFERENCES albums(id),
  song_id INT REFERENCES songs(id),
);

-- INPUT: album_name
-- OUTPUT: get all songs from album
SELECT songs.*
FROM albums a, songs s, albums_songs as
WHERE a.id = as.id AND s.id = as.id AND a.album_name = {album_name}





-- An album may have multiple songs
-- - Many albums have many songs
-- - Many songs belong to many albums

-- has-a relationship
-- owning/owned relationship
-- => Owned table/side will have the foreign key


-- albums
-- 1: ABC
-- 2: XYZ

-- songs
-- 100: album_id = 1
-- 101: album_id = 1
