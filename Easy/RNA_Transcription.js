//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export function toRna(dna) {
    return dna.split("").map((letter) => {
     switch (letter) {
      case "A": return "U";
      case "C": return "G";
      case "G": return "C";
      case "T": return "A";
      default : return ""
    }
    }).join("");
  }
  