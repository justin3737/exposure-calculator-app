export const countEV = (exp) => {
    let evTable = [13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16],
        shutterEV = evTable[exp.Shutter];
    return shutterEV + exp.Aperture + exp.ISO -1;
};