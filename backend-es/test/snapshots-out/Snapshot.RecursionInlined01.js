// @inline Snapshot.RecursionInlined01.append always
import * as $runtime from "../runtime.js";
const $List = (tag, _1, _2) => ({tag, _1, _2});
const Nil = /* #__PURE__ */ $List("Nil");
const Cons = value0 => value1 => $List("Cons", value0, value1);
const append = v => v1 => {
  if (v.tag === "Nil") { return v1; }
  if (v.tag === "Cons") { return $List("Cons", v._1, append(v._2)(v1)); }
  $runtime.fail();
};
const test1 = /* #__PURE__ */ $List(
  "Cons",
  "a",
  /* #__PURE__ */ $List(
    "Cons",
    "b",
    /* #__PURE__ */ $List(
      "Cons",
      "c",
      /* #__PURE__ */ $List("Cons", "d", /* #__PURE__ */ $List("Cons", "e", /* #__PURE__ */ $List("Cons", "f", /* #__PURE__ */ $List("Cons", "g", Nil))))
    )
  )
);
const test2 = z => $List(
  "Cons",
  "a",
  $List(
    "Cons",
    "b",
    $List(
      "Cons",
      "c",
      (() => {
        if (z.tag === "Nil") { return $List("Cons", "d", $List("Cons", "e", $List("Cons", "f", $List("Cons", "g", Nil)))); }
        if (z.tag === "Cons") {
          return $List(
            "Cons",
            z._1,
            (() => {
              if (z._2.tag === "Nil") { return $List("Cons", "d", $List("Cons", "e", $List("Cons", "f", $List("Cons", "g", Nil)))); }
              if (z._2.tag === "Cons") {
                return $List(
                  "Cons",
                  z._2._1,
                  (() => {
                    if (z._2._2.tag === "Nil") { return $List("Cons", "d", $List("Cons", "e", $List("Cons", "f", $List("Cons", "g", Nil)))); }
                    if (z._2._2.tag === "Cons") {
                      return $List(
                        "Cons",
                        z._2._2._1,
                        (() => {
                          if (z._2._2._2.tag === "Nil") { return $List("Cons", "d", $List("Cons", "e", $List("Cons", "f", $List("Cons", "g", Nil)))); }
                          if (z._2._2._2.tag === "Cons") {
                            return $List("Cons", z._2._2._2._1, append(z._2._2._2._2)($List("Cons", "d", $List("Cons", "e", $List("Cons", "f", $List("Cons", "g", Nil))))));
                          }
                          $runtime.fail();
                        })()
                      );
                    }
                    $runtime.fail();
                  })()
                );
              }
              $runtime.fail();
            })()
          );
        }
        $runtime.fail();
      })()
    )
  )
);
export {$List, Cons, Nil, append, test1, test2};
