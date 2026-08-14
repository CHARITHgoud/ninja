## 2025-05-18 - Avoid In-Function Static Object Allocations in Hot Code Paths
**Learning:** Instantiating large static dictionaries or SVG icon mappings inside hot functions like `generateHTML()` creates unnecessary memory allocations on every invocation, increasing garbage collection pressure.
**Action:** Always hoist static, non-dynamic lookup objects and dictionaries to module scope in generator modules.
