# ALTER TABLE
- add a new column to a table (ADD COLUMN)
- rename the table (RENAME TO) after creating it.

# I decide to create an app to track where I want to travel to one day.
CREATE TABLE travel_spots (
    id INTEGER PRIMARY KEY,
    country TEXT,
    climate TEXT
);
    

# I populate it with a few places
INSERT INTO travel_spots (country, climate) VALUES ("Ecuador", "Humid Subtropical");
INSERT INTO travel_spots (country, climate) VALUES ("Germany", "Temperate Seasonal");
INSERT INTO travel_spots (country, climate) VALUES ("Costa Rica", "Tropical");
INSERT INTO travel_spots (country, climate) VALUES ("Spain", "Mediterranean");
INSERT INTO travel_spots (country, climate) VALUES ("Bali", "Tropical");
SELECT * FROM travel_spots;


# I decide later I care about the language spoken, so that I can practice languages I already know.
ALTER TABLE travel_spots ADD COLUMN language TEXT;
SELECT * FROM travel_spots;

# (ADD COLUMN)
# Now I'll fill in those NULL values
UPDATE table_name SET property = "newColumn_value" WHERE property IN ("property_value");

UPDATE travel_spots SET language="Spanish" WHERE country IN ("Ecuador", "Costa Rica", "Spain");

UPDATE travel_spots SET language="German" WHERE country = "Germany";
UPDATE travel_spots SET language="Indonesian" WHERE country = "Bali";
SELECT * FROM travel_spots;

# (RENAME TABLE)
# I've decided that I'm not just picking a place to travel to, I'm picking a new place to live.
ALTER TABLE travel_spots RENAME TO places_to_live;
SELECT * FROM places_to_live;