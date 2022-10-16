/* mysql < cats.sql */  
CREATE TABLE IF NOT EXISTS cats(CatName VARCHAR(20), FavSnack VARCHAR(20), primary key (CatName));
INSERT INTO cats(CatName, FavSnack) VALUES ('Tesla', 'Ham');
.backup cats.db


