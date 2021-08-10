// CUSTOM HOOK
import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      // si no tengo animal, no tengo setBreedList (lista razas)
      setBreedList([]);
    } else if (localCache[animal]) {
      // si ya tengo una copia de esto en mi localcache entonces la sirvo inmediatamente
      setBreedList(localCache[animal]);
    } else {
      requestBreedList(); // entonces, ve al API y tomalo
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(`//pets-v2.dev-apis.com/breeds?animal=${animal}`);
      const json = await res.json(); // lo q tenga de vuelta del API
      localCache[animal] = json.breeds || []; // queremos guardar esos resultados para que en el futuro, si vuelven a ella, vuelvan a obtener esa respuesta... || [] por si se cae la API
      setBreedList(localCache[animal]); // ahora todo lo que se guarde es setBreedList
      setStatus("loaded");
    }
  }, [animal]); // cada vez que tenga un animal, necesito que corra

  return [breedList, status];
}

// String que representa en qué estado se encuentra el hook:
// >> unloaded si nunca fue llamado
// >> loading si una nueva cosa se esta cargando
// >> loaded si la cosa esta cargada
