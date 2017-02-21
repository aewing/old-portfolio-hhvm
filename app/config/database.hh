<?hh // partial
return Map {
  "default" => Map {
    "params" => Map {
      "type" => "mysql",
      "host" => "mysql"
    },
    "schema" => "phenocode",
    "user" => "phenocode",
    "password" => "password"
  },
  "test" => Map {
    "params" => Map {
      "type" => "mysql",
      "host" => "mysql"
    },
    "schema" => "phenocode_test",
    "user" => "phenocode",
    "password" => "password"
  }
};
