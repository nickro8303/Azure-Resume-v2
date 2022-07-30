using Newtonsoft.Json;

namespace Company.Function
{

    public class Counter
    {
        private const string V = "count";

        [JsonProperty(PropertyName ="id")]
        public string Id {get; set;}
        
        [JsonProperty(PropertyName = V)]

        public int Count {get;set;}
    }
}