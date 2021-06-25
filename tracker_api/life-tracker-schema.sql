CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  first_name  TEXT NOT NULL,
  last_name   TEXT NOT NULL,
  password    TEXT NOT NULL,
  username    TEXT NOT NULL UNIQUE,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
);

CREATE TABLE exercises (
    id        SERIAL PRIMARY KEY,
    name      TEXT NOT NULL,
    category  TEXT,
    duration  INTEGER,
    intensity INTEGER,
    user_id   INTEGER REFERENCES users(id) on DELETE CASCADE,
    timestamp  TIMESTAMP DEFAULT NOW()
);

