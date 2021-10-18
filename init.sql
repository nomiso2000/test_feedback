CREATE TABLE feedback(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message VARCHAR(255)
);

INSERT INTO feedback (name, email, message)
VALUES  ('Misha', 'Misha@mail.com', 'test');