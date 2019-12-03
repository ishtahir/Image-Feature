DROP DATABASE IF EXISTS fecimage;

CREATE DATABASE fecimage;

USE fecimage;

CREATE TABLE inventory
(
  id INT PRIMARY KEY UNIQUE,
  name TEXT,
  price DECIMAL(10,2),
  links TEXT,
  sku TEXT,
  model INT,
  stock INT
);