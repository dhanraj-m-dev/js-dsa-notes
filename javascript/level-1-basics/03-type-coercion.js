/**
 * Topic: Type coercion
 *
 * Summary:
 * - JS converts types automatically (implicit coercion)
 * - Developer can convert types manually (explicit coercion)
 */

// Implicit coercion
console.log(1 + "2"); // "12"
console.log(1 - "2"); // -1

// Explicit coercion
console.log(Number("10")); // 10
console.log(String(20)); // "20"

/**
 * Interview notes:
 * - + operator does string concatenation if one operand is string
 * - Other operators force numeric conversion
 */
