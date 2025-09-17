function climbStairs(n : number): number{
   let memory : number[]=[];

   function dp(m: number): number{
    if(m === 0 || m === 1) return 1
    if (memory[m] !== undefined) return memory[m];

    memory[m] = dp(m-1) + dp(m-2);
    return memory[m]

   }

   return dp(n)
}

