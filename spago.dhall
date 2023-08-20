{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "backend-optimizer"
, dependencies =
  [ "aff"
  , "ansi"
  , "argonaut"
  , "argparse-basic"
  , "arrays"
  , "bifunctors"
  , "console"
  , "control"
  , "datetime"
  , "debug"
  , "dodo-printer"
  , "effect"
  , "either"
  , "enums"
  , "filterable"
  , "foldable-traversable"
  , "foreign-object"
  , "integers"
  , "language-cst-parser"
  , "lazy"
  , "lists"
  , "maybe"
  , "newtype"
  , "node-buffer"
  , "node-child-process"
  , "node-fs"
  , "node-fs-aff"
  , "node-glob-basic"
  , "node-path"
  , "node-process"
  , "node-streams"
  , "now"
  , "numbers"
  , "ordered-collections"
  , "orders"
  , "parallel"
  , "partial"
  , "posix-types"
  , "prelude"
  , "profunctor-lenses"
  , "refs"
  , "safe-coerce"
  , "st"
  , "strings"
  , "transformers"
  , "tuples"
  , "unsafe-coerce"
  ]
, packages = ./packages.dhall
, sources =
  [ "src/**/*.purs", "backend-es/src/**/*.purs", "backend-es/test/*.purs" ]
}
