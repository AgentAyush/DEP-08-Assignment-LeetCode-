class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer,Integer> hm= new HashMap<>();
        PriorityQueue< Map.Entry<Integer,Integer>> pq = new PriorityQueue<>((a,b)-> b.getValue()-a.getValue());
        for(int i: nums)
        {
            hm.put(i,hm.getOrDefault(i,0)+1);
        }
 
        for(Map.Entry<Integer,Integer> e : hm.entrySet())
        {
            pq.add(e);
        }
 
        int res[] = new int [k];
        while(k>0)
        {
            Map.Entry<Integer, Integer> t= pq.poll();
            res[--k]= t.getKey();
 
        }
       
       
     return res;  
    }
}
